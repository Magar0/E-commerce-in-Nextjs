import Contacts from "@/models/contacts";
import { NextResponse } from "next/server";
import connectMongoDb from "@/utils/dbConnect";


export async function POST(req, res) {
    try {
        const body = await req.json();
        await connectMongoDb();
        await Contacts.create(body)
        return NextResponse.json(
            { message: "Message sent Successful" },
            { status: 200 }
        )
    } catch (e) {
        return NextResponse.json(
            { message: "Server error, please try again!" },
            { status: 500 }
        )
    }
}