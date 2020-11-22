import asyncio
import requests
import time
#סתכלו למטה

async def main():
    port=""
    while port != "Q":
        file = open("results.txt","a")
        port = input("choose node (n) or python (p) (Q to quit):")
        if port=="p":
            port ="80"
        elif port=="n":
            port ="8080"
        else:
            continue
        loop = asyncio.get_event_loop()
        start =  time.time()
        for x in range(1000):
            future1 = loop.run_in_executor(None, requests.get, f'http://localhost:{port}/users')
            response1 = await future1 
        stop = time.time()
        if port == "80":
            print(f"it took {stop-start} seconds for python\n")
            file.write(f"it took {stop-start} seconds for python\n")
        else:
            print(f"it took {stop-start} seconds for node\n")   
            file.write(f"it took {stop-start} seconds for node\n")
    file.close()





if __name__ == '__main__':
    loop = asyncio.get_event_loop()
    loop.run_until_complete(main())
    loop.close()

