import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';

function EnquiryForm() {
  const { register, handleSubmit, reset, setValue, formState: { errors, isSubmitting } } = useForm();

  const onSubmit = async (data) => {
    try {
      const enquiries = JSON.parse(localStorage.getItem('enquiries') || '[]');
      const newEnquiry = {
        ...data,
        id: Date.now(),
        timestamp: new Date().toISOString()
      };
      enquiries.push(newEnquiry);
      localStorage.setItem('enquiries', JSON.stringify(enquiries));
      
      toast.success('Enquiry submitted successfully');
      reset();
    } catch (error) {
      toast.error('Failed to submit enquiry. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            placeholder="your.email@example.com"
            className="text-gray-900 placeholder:text-gray-400"
            {...register('email', { 
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
          />
          {errors.email && (
            <p className="text-sm text-destructive">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          <Label htmlFor="businessName">Business name</Label>
          <Input
            id="businessName"
            type="text"
            placeholder="Your business or institution"
            className="text-gray-900 placeholder:text-gray-400"
            {...register('businessName')}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="productInterest">Product interest *</Label>
        <Select onValueChange={(value) => setValue('productInterest', value)}>
          <SelectTrigger id="productInterest" className="text-gray-900">
            <SelectValue placeholder="Select product category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="school-uniforms">School uniforms</SelectItem>
            <SelectItem value="school-blazers">School blazers</SelectItem>
            <SelectItem value="readymade-pants">Readymade pants</SelectItem>
            <SelectItem value="aprons">Aprons</SelectItem>
            <SelectItem value="security-dresses">Security dresses</SelectItem>
            <SelectItem value="corporate-dresses">Corporate dresses</SelectItem>
            <SelectItem value="custom-bulk">Custom bulk garments</SelectItem>
          </SelectContent>
        </Select>
        {errors.productInterest && (
          <p className="text-sm text-destructive">{errors.productInterest.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          placeholder="Tell us about your requirements..."
          rows={4}
          className="text-gray-900 placeholder:text-gray-400"
          {...register('message')}
        />
      </div>

      <Button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 active:scale-[0.98]"
      >
        {isSubmitting ? 'Submitting...' : 'Submit enquiry'}
      </Button>
    </form>
  );
}

export default EnquiryForm;