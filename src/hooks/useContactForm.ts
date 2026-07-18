import { useState } from "react";

import type { ContactFormData } from "../types/Contact";

export function useContactForm() {

    const [form, setForm] = useState<ContactFormData>({

        name: "",

        email: "",

        company: "",

        service: "",

        message: "",

        website: "",

    });

    const [loading, setLoading] =
        useState(false);

    const [success, setSuccess] =
        useState(false);

    const [error, setError] =
        useState("");

    return {

        form,

        setForm,

        loading,

        setLoading,

        success,

        setSuccess,

        error,

        setError,

    };

}