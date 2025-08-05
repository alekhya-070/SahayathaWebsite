// You can use nodemailer or any email service here
export default async function sendEmail({ to, subject, text }) {
    // Implement email sending logic here
    // For now, just log
    console.log(`Email to ${to}: ${subject} - ${text}`);
  }