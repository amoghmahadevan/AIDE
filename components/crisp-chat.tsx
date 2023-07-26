"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("c71a410b-d77a-4d13-bd2b-fce4a0686ade");
    }, []);

    return null;
}