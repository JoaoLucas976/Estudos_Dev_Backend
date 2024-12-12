"""
    Callback functions are functions that are passed as arguments to other function
    There are two main types: syncronous and asyncronous
    Syncronous callback functions are those that are executed immediately inside the function that recieved them
    Asyncronous callback functions are those that are executed after the conclusion of an asyncronous operation, like a network request
"""

# Syncronous Callback
def callback_function():
    return print('Retorno da Callback')

def main_function(callback):
    print('Retorno da Principal')
    callback()

main_function(callback_function)

# Asyncronous Callback
import asyncio

async def make_request(url, callback):
    print(f"Making request to {url}...")
    await asyncio.sleep(2)
    print(f"Request to {url} completed")
    callback()

def process_request():
    print('Processing request...')

async def main():
    await make_request("https://www.google.com", process_request)

asyncio.run(main())