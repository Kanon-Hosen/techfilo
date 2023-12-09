import * as jwt from "jsonwebtoken";

export const POST = async (req) => {
  try {
    const user = await req?.json();
    // Headers authorization::::::::::::::::::::::::
    console.log(user);
    const token = jwt.sign({ email: user }, process.env.JWT_SECRET_KEY, {
      expiresIn: 60 * 60,
    });
    return Response.json({
      success: true,
      message: "successfull",
      data: token,
    });
  } catch (error) {
    return Response.json({
      success: false,
      message: error.message,
      data: null,
    });
  }
};
