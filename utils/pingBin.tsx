
export const pingbin = async (path:string) => {
await fetch("https://enlr0ppib8qck.x.pipedream.net/", {
    method: "POST",
    headers:{
        "Content-Type":"application/json"
    },
    mode: "cors",
    body: JSON.stringify({ "path": path }),
  })
}