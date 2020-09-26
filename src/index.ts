import { createClient } from "node-zendesk";

async function main() {
  const client = createClient({
    remoteUri: process.env.REMOTE_URI!,
    username: process.env.USERNAME!,
    token: process.env.TOKEN!,
    oauth: true,
    disableGlobalState: true,
    debug: true,
  });

  const users = await client.users.list();
  console.log(users);
}

main()
  .then(() => console.log("done..."))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
