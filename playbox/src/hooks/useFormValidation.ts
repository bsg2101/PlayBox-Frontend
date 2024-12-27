// src/hooks/useFormValidation.ts
import { useState } from 'react'

interface ValidationRules {
  required?: boolean
  minLength?: number
  maxLength?: number
  pattern?: RegExp
}

export function useFormValidation(rules: Record<string, ValidationRules>) {
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = (name: string, value: string) => {
    const fieldRules = rules[name]
    if (!fieldRules) return true

    if (fieldRules.required && !value) {
      setErrors(prev => ({ ...prev, [name]: 'This field is required' }))
      return false
    }

    if (fieldRules.minLength && value.length < fieldRules.minLength) {
      setErrors(prev => ({ 
        ...prev, 
        [name]: `Minimum length is ${fieldRules.minLength}` 
      }))
      return false
    }

    if (fieldRules.pattern && !fieldRules.pattern.test(value)) {
      setErrors(prev => ({ ...prev, [name]: 'Invalid format' }))
      return false
    }

    setErrors(prev => {
      const newErrors = { ...prev }
      delete newErrors[name]
      return newErrors
    })
    return true
  }

  return { errors, validate }
}