import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { order, customer, items, total, paymentMethod, selectedBank } = body

    // Generate order ID
    const orderId = `ADUDA-${Date.now().toString(36).toUpperCase()}`

    // Format items for email
    const itemsList = items
      .map(
        (item: { name: string; size: string; quantity: number; price: number }) =>
          `- ${item.name} (Size: ${item.size}) x${item.quantity} - €${(item.price * item.quantity).toFixed(2)}`
      )
      .join('\n')

    // Email content
    const emailContent = `
New Order Received!

Order ID: ${orderId}
Date: ${new Date().toLocaleString('nl-NL', { timeZone: 'Europe/Amsterdam' })}

Customer Details:
-----------------
Name: ${customer.firstName} ${customer.lastName}
Email: ${customer.email}
Phone: ${customer.phone}

Shipping Address:
-----------------
${customer.address}${customer.apartment ? `, ${customer.apartment}` : ''}
${customer.zipCode} ${customer.city}
${customer.state}, ${customer.country}

Payment Method: ${paymentMethod}${selectedBank ? ` (${selectedBank})` : ''}

Order Items:
-----------------
${itemsList}

Subtotal: €${total.toFixed(2)}
Shipping: Free
Total: €${total.toFixed(2)}

---
ADUDA NATURAL SERVICE
    `.trim()

    // Send email notification
    if (process.env.RESEND_API_KEY) {
      await resend.emails.send({
        from: 'ADUDA Orders <onboarding@resend.dev>',
        to: 'ajskrook@gmail.com',
        subject: `New Order #${orderId} - ADUDA NATURAL SERVICE`,
        text: emailContent,
      })
    }

    return Response.json({
      success: true,
      orderId,
      message: 'Order placed successfully',
    })
  } catch (error) {
    console.error('Order processing error:', error)
    return Response.json(
      { success: false, error: 'Failed to process order' },
      { status: 500 }
    )
  }
}
