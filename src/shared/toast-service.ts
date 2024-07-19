import { useToast } from 'primevue/usetoast'

export function useToastService() {
  const toast = useToast()

  const showSuccess = (message: string = 'Success') => {
    toast.add({ severity: 'success', summary: 'Success Message', detail: message, life: 3000 })
  }

  const showInfo = (message: string) => {
    toast.add({ severity: 'info', summary: 'Info Message', detail: message, life: 3000 })
  }

  const showWarn = (message: string) => {
    toast.add({ severity: 'warn', summary: 'Warn Message', detail: message, life: 3000 })
  }

  const showError = (message: string) => {
    toast.add({ severity: 'error', summary: 'Error Message', detail: message, life: 3000 })
  }

  return {
    showSuccess,
    showInfo,
    showWarn,
    showError
  }
}
