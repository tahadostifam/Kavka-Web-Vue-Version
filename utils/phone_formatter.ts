export function formatPhone(phone: string) {
    const x = phone.replace(/\D/g, "").match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
    const formatted = !x![2] ? x![1] : "(" + x![1] + ") " + x![2] + (x![3] ? "-" + x![3] : "");
    return formatted;
}

export function unFormatPhone(formatPhone: string) {
    return formatPhone.replace(/\D/g, "");
}

export function normalizePhone(phone: string) {
    const str = "+98";
    if (!phone.startsWith(str)) {
        phone = str + phone;
    }
    return phone;
}
