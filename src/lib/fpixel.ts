export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID;

export const pageview = () => {
    window.fbq('track', 'PageView');
};

// Eventos personalizados
export const event = (name: string, options = {}) => {
    window.fbq('track', name, options);
};

// Eventos de conversão
export const conversion = (name: string, options = {}) => {
    window.fbq('trackCustom', name, options);
};

// Evento de Lead
export const lead = (options = {}) => {
    window.fbq('track', 'Lead', options);
};

// Evento de Contato
export const contact = (options = {}) => {
    window.fbq('track', 'Contact', options);
}; 