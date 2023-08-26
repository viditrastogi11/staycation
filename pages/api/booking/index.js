import nextConnect from "next-connect";
import dbConnect from "../../../config/dbConnect";
import { newBooking } from "../../../controllers/bookingControllers";
import onError from "../../../middlewares/errors";

const handler = nextConnect({ onError });

dbConnect();

handler.post(newBooking);

export default handler;
