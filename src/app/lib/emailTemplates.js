export function enquiryEmailTemplate(d) {
  return `
    <h2>New IP Requirement Enquiry</h2>
    <p><b>Name:</b> ${d.fullName}</p>
    <p><b>Email:</b> ${d.email}</p>
    <p><b>Phone:</b> ${d.phone}</p>
    <p><b>Services:</b> ${d.services?.join(", ")}</p>
    <p><b>Message Source:</b> IP Enquiry Form</p>
    <p><b>Submitted:</b> ${new Date().toLocaleString()}</p>
  `;
}

export function supportEmailTemplate(d) {
  return `
    <h2>New Support Ticket</h2>
    <p><b>Name:</b> ${d.fullName}</p>
    <p><b>Email:</b> ${d.email}</p>
    <p><b>Message:</b></p>
    <p>${d.message}</p>
    <p><b>Submitted:</b> ${new Date().toLocaleString()}</p>
  `;
}
