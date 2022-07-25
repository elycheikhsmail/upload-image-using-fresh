import { fileUpload } from "../../utiles/file.ts";
import { HandlerContext } from "$fresh/server.ts";

 

export const handler = async (
  req: Request,
  _ctx: HandlerContext,
): Promise<Response> => { 

  const formData = await req.formData();
  const image = formData.get("image") as File;
  const fileName = await fileUpload(image);
  console.log("file is saved"); 
  return Response.json({ fileName }); 
};
