import { redirect } from "react-router-dom";
import { deleteContact } from "../../../contacts";

export async function action({ params }) {
    // throw new Error("oh dang!");
    // throw new Response("", {
    //     status: 404,
    //     statusText: "Not Found",
    // });

    await deleteContact(params.contactId);
    return redirect("/");
}