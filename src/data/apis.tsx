"use server";

import { OmniCrmUrl, PUJADIVINE_BACKEND_TOKEN } from "@/data/url";
import axios from "axios";
const URL = OmniCrmUrl;
export async function sendEnqToOmniCrmBackend(body: Record<string, any>) {
    try {
        const response: any = await axios.post(`${URL}/api/leads/omnicrm/create/leads`, body, {
            headers: {
                "Authorization": `Basic ${PUJADIVINE_BACKEND_TOKEN}`
            }
        })
        return {
            status:true,
            response
        };
    } catch (error) {
        return {
            status: false,
            type: error
        }
    }
}

