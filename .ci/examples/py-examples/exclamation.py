from pulsar import Function

# The classic ExclamationFunction that appends an exclamation at the end
# of the input
class ExclamationFunction(Function):
  def __init__(self):
    pass

  def process(self, input, context):
    logger = context.get_logger()
    msg_id = context.get_message_id()
    logger.info("processing message %s in function %s/%s/%s" % (msg_id, context.get_function_tenant(), context.get_function_namespace(), context.get_function_name()))
    for word in input.split(" "):
      context.incr_counter(word, 1)
      count = context.get_counter(word)
      logger.info("got word: %s for %d times" % (word, count.value))
    context.publish("persistent://public/default/test-py-package-serde-extra", input + '!')
    return input + '!'
