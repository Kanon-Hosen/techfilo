import * as jwt from "jsonwebtoken";
import { client } from "@/utils/database";

const Portfolio = client.db("itinstitute").collection("Portfolio");
export const GET = async (req) => {
  const url = new URL(req?.url);
  const category = url.searchParams.get("category");
  const query = {};

  try {
    if (category === "All") {
      const items = await Portfolio?.find({}).toArray();
      return Response.json(
        {
          success: true,
          message: "Successfully get portfolio items",
          data: items,
        },
        { status: 200 }
      );
    }   
    const items = await Portfolio?.find({category:category}).toArray();
    return Response.json(
      {
        success: true,
        message: "Successfully get portfolio items",
        data: items,
      },
      { status: 200 }
    );
  } catch (error) {
    return Response.json({
      success: false,
      message: error?.message,
      data: [],
    });
  }
};

export const POST = async (req) => {
  const body = await req?.json();
  const BearerToken = await req?.headers.get("authorization");
  const email = await req?.headers.get("email");
  const token = BearerToken?.split(" ")[1];
  console.log(token);
  if (!email) {
    return Response.json({ errorMessage: "Email not found" }, { status: 404 });
  }

  jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, decode) => {
    if (err) {
      return Response.json(
        { errorMessage: "Unauthorized user" },
        { status: 401 }
      );
    }
    const decodedEmail = decode?.email;
    console.log("d", decodedEmail);
    if (decodedEmail !== email) {
      return Response.json(
        { errorMessage: "Unauthorized user" },
        { status: 401 }
      );
    }
  });
  try {
    const items = await Portfolio.insertOne(body);
    return Response.json(
      {
        success: true,
        message: "Success",
        data: items,
      },
      { status: 200 }
    );
  } catch (error) {
    return Response.json({
      success: false,
      message: "Unsuccessfull",
      data: null,
    });
  }
};
