import requests

def process(params):
  return requests.get("https://jsonplaceholder.typicode.com/todos/" + params).content
