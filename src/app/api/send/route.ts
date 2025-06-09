import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const { nome, email, telefone } = await request.json();

        if (!nome || !email || !telefone) {
            return NextResponse.json(
                { error: 'Todos os campos são obrigatórios' },
                { status: 400 }
            );
        }

        const data = await resend.emails.send({
            from: 'Espaço Benji <onboarding@resend.dev>',
            to: ['benjifestas@gmail.com'],
            reply_to: email,
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
        console.error('Erro ao enviar email:', error);
        return NextResponse.json(
            { error: 'Erro ao enviar mensagem' },
            { status: 500 }
        );
    }
} 