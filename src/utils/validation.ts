// Form validation utilities

export interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: string) => string | undefined;
}

export interface FormField {
  value: string;
  error?: string;
  touched: boolean;
}

export interface FormData {
  [key: string]: FormField;
}

export const validateField = (value: string, rules: ValidationRule): string | undefined => {
  // Required validation
  if (rules.required && (!value || value.trim() === '')) {
    return 'This field is required';
  }

  // Skip other validations if field is empty and not required
  if (!value || value.trim() === '') {
    return undefined;
  }

  // Minimum length validation
  if (rules.minLength && value.length < rules.minLength) {
    return `Must be at least ${rules.minLength} characters`;
  }

  // Maximum length validation
  if (rules.maxLength && value.length > rules.maxLength) {
    return `Must be no more than ${rules.maxLength} characters`;
  }

  // Pattern validation
  if (rules.pattern && !rules.pattern.test(value)) {
    return 'Invalid format';
  }

  // Custom validation
  if (rules.custom) {
    return rules.custom(value);
  }

  return undefined;
};

export const validateEmail = (email: string): string | undefined => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!email || email.trim() === '') {
    return 'Email is required';
  }
  
  if (!emailPattern.test(email)) {
    return 'Please enter a valid email address';
  }
  
  return undefined;
};

export const validateName = (name: string): string | undefined => {
  if (!name || name.trim() === '') {
    return 'Name is required';
  }
  
  if (name.trim().length < 2) {
    return 'Name must be at least 2 characters';
  }
  
  if (name.trim().length > 50) {
    return 'Name must be no more than 50 characters';
  }
  
  return undefined;
};
