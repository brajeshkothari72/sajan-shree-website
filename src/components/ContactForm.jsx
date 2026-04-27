import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Phone, MessageCircle, Mail, MapPin, Clock } from 'lucide-react';

function ContactForm() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();

  const onSubmit = async (data) => {
    try {
      const contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
      const newContact = {
        ...data,
        id: Date.now(),
        timestamp: new Date().toISOString()
      };
      contacts.push(newContact);
      localStorage.setItem('contacts', JSON.stringify(contacts));
      
      toast.success('Message sent successfully');
      reset();
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 leading-snug">Send us a message</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              type="text"
              placeholder="Your full name"
              className="text-gray-900 placeholder:text-gray-400"
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name && (
              <p className="text-sm text-destructive">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone number *</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="Your phone number"
              className="text-gray-900 placeholder:text-gray-400"
              {...register('phone', { required: 'Phone number is required' })}
            />
            {errors.phone && (
              <p className="text-sm text-destructive">{errors.phone.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="businessName">Business/Institution name</Label>
            <Input
              id="businessName"
              type="text"
              placeholder="Your business or institution"
              className="text-gray-900 placeholder:text-gray-400"
              {...register('businessName')}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="productRequirement">Product requirement</Label>
            <Input
              id="productRequirement"
              type="text"
              placeholder="What products do you need?"
              className="text-gray-900 placeholder:text-gray-400"
              {...register('productRequirement')}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="quantity">Quantity required</Label>
            <Input
              id="quantity"
              type="text"
              placeholder="Approximate quantity"
              className="text-gray-900 placeholder:text-gray-400"
              {...register('quantity')}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message *</Label>
            <Textarea
              id="message"
              placeholder="Tell us more about your requirements..."
              rows={4}
              className="text-gray-900 placeholder:text-gray-400"
              {...register('message', { required: 'Message is required' })}
            />
            {errors.message && (
              <p className="text-sm text-destructive">{errors.message.message}</p>
            )}
          </div>

          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 active:scale-[0.98]"
          >
            {isSubmitting ? 'Sending...' : 'Send message'}
          </Button>
        </form>
      </div>

      <div className="space-y-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 leading-snug">Contact information</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium mb-1">Phone</p>
                <p className="text-muted-foreground">9893053534</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MessageCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium mb-1">WhatsApp</p>
                <p className="text-muted-foreground">9425062368</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium mb-1">Email</p>
                <p className="text-muted-foreground break-all">ssgbhavya@rediffmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium mb-1">Address</p>
                <p className="text-muted-foreground leading-relaxed">
                  15/2 Junatukoganj, Hemilton Road, Rambagh, Indore 452007
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium mb-1">Business hours</p>
                <p className="text-muted-foreground">Monday - Saturday: 10:00 AM - 7:00 PM</p>
                <p className="text-muted-foreground">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Location</h3>
          <div className="rounded-xl overflow-hidden border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.8!2d75.8577!3d22.7196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDQzJzEwLjYiTiA3NcKwNTEnMjcuNyJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sajan Shree Garments location map"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;