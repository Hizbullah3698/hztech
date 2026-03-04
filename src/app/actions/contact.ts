"use server";

import { z } from "zod";
import { Resend } from "resend";

const contactSchema = z.object({
    fullName: z.string().min(1, "Full name is required"),
    companyName: z.string().min(1, "Company name is required"),
    role: z.string().min(1, "Role is required"),
    projectType: z.string().min(1, "Project type is required"),
    budget: z.string().min(1, "Budget is required"),
    projectBrief: z.string().min(10, "Brief description is required (at least 10 chars)"),
});

export async function submitContactForm(formData: FormData) {
    try {
        const validatedData = contactSchema.parse({
            fullName: formData.get("fullName"),
            companyName: formData.get("companyName"),
            role: formData.get("role"),
            projectType: formData.get("projectType"),
            budget: formData.get("budget"),
            projectBrief: formData.get("projectBrief"),
        });

        const apiKey = process.env.RESEND_API_KEY;

        if (!apiKey) {
            console.warn("RESEND_API_KEY is not defined. Simulating a successful email dispatch.");
            // Simulate network request
            await new Promise((resolve) => setTimeout(resolve, 1500));
            return { success: true };
        }

        const resend = new Resend(apiKey);

        // We send to the requested email: hizbullahwazir.dev@gmail.com
        // Using Resend's onboarding test email as the "from" to ensure it bypasses strict DMARC checks out-of-the-box.
        const { data, error } = await resend.emails.send({
            from: "HZ Tech Inquiry <onboarding@resend.dev>",
            to: ["hizbullahwazir.dev@gmail.com"],
            subject: `New Enterprise Lead: ${validatedData.companyName} (${validatedData.projectType})`,
            html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6; max-width: 600px;">
          <h2 style="color: #0ABFBC;">New Project Inquiry</h2>
          <p>You have received a new lead from the HZ Tech website.</p>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Name:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${validatedData.fullName}</td></tr>
            <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Company:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${validatedData.companyName}</td></tr>
            <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Role:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${validatedData.role}</td></tr>
            <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Project Type:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${validatedData.projectType}</td></tr>
            <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Budget Range:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${validatedData.budget}</td></tr>
          </table>
          <h3 style="margin-top: 24px;">Project Brief:</h3>
          <p style="background: #f5f8f8; padding: 15px; border-radius: 4px; white-space: pre-wrap;">${validatedData.projectBrief}</p>
        </div>
      `,
        });

        if (error) {
            console.error("Resend API error:", error);
            return { success: false, error: "Failed to dispatch email due to a mail server error." };
        }

        // Success response
        return { success: true };

    } catch (error: any) {
        if (error instanceof z.ZodError) {
            return { success: false, error: error.issues[0].message };
        }
        console.error("Server Action Form Error:", error);
        return { success: false, error: "An unexpected error occurred while processing the form." };
    }
}
