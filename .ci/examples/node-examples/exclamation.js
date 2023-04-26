async function process(message, context) {
    const logger = context.getLogger();
    let msg_id = await context.getMessageId()
    logger.info(`processing message ${msg_id} in function ${context.getFunctionTenant()}/${context.getFunctionNamespace()}/${context.getFunctionName()}`)
    for (let word of message.split(" ")) {
        await context.incrementCounter(word, 1)
        count = await context.getCounter(word)
        logger.info(`got word: ${word} for ${count['value']} times`)
    }
    await context.publish("persistent://public/default/test-node-package-serde-extra", message.concat("!!!"))
    return message.concat("!");
}
