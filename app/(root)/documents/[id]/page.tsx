import CollaborativeRoom from "@/components/CollaborativeRoom";
import { getDocument } from "@/lib/actions/room.actions";
import { getClerkUsers } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { use } from "react";

const Document = async({params: {id}}: SearchParamProps) => {

  const clerkUser = await currentUser();
  if(!clerkUser) redirect('/sign-in');

  const room = await getDocument({
    roomId: id,
    userId: clerkUser.emailAddresses[0].emailAddress,
  })
  // console.log("roomwala: ", room.userAccesses)
  // console.log("User accesses: ", room.usersAccesses);
  // const emails = Object.keys(room.usersAccesses);
// console.log(emails); // ['hrutvikkhatkar25@gmail.com']


  if(!room) redirect('/');
  
  //TODO: Assess the permission of the user to access the document
  const userIds = Object.keys(room.usersAccesses);
  // console.log("userIds", userIds)
  // const userIds = Object.keys(room.userAccesses);
  
  const users = (await getClerkUsers({ userIds })) || [];
  // console.log("users: ", users)

  const usersData = users.map((user: User) => ({
    ...user,
    userType: room.usersAccesses?.[user.email]?.includes("room:write") ? "editor" : "viewer",
  })) ;

  // console.log("userData: ", usersData)
  // const currentUserType = room.userAccesses[clerkUser.emailAddresses[0].emailAddress]?.includes('room:write')? 'editor':'viewer';
  const currentUserType = room.usersAccesses?.[clerkUser.emailAddresses?.[0]?.emailAddress]?.includes("room:write")
  ? "editor"
  : "viewer";
  // console.log("currentUserTypeeee: ", currentUserType)
  
  return (
    <main className="flex w-full flex-col items-center">
      <CollaborativeRoom
        roomId={id}
        roomMetadata={room.metadata}
        users={usersData}
        currentUserType={currentUserType}
      />
      {/* <Editor/> */}
    </main>
  );
};

export default Document;
