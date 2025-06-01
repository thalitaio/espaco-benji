import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const { nome, email, telefone } = await request.json();

        const data = await resend.emails.send({
            from: 'Espaço Benji <contato@espacobenji.com.br>',
            to: ['contatothalitanunes@gmail.com'],
            subject: 'Novo pedido de orçamento - Espaço Benji',
            html: `
        <h2>Novo pedido de orçamento recebido</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${telefone}</p>
      `,
        });

        return NextResponse.json({ data });
    } catch (error) {
        return NextResponse.json({ error });
    }
} 