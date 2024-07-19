<template>
  <h3>Home</h3>

  <div class="flex align-items-center gap-3">
    <Button size="small" label="Show Dialog" @click="showDialog" raised />
  </div>

  <Dialog v-model:visible="visible" modal header="Edit Profile" :style="{ width: '25rem' }">
    <span class="p-text-secondary block mb-5">Update your information.</span>
    <div class="flex align-items-center gap-3 mb-3">
      <label for="firstName" class="font-semibold w-6rem">First Name</label>
      <InputText id="firstName" class="flex-auto" autocomplete="off" />
    </div>
    <div class="flex align-items-center gap-3 mb-3">
      <label for="lastName" class="font-semibold w-6rem">Last Name</label>
      <InputText id="lastName" class="flex-auto" autocomplete="off" />
    </div>
    <div class="flex align-items-center gap-3 mb-5">
      <label for="email" class="font-semibold w-6rem">Email</label>
      <InputText id="email" class="flex-auto" autocomplete="off" />
    </div>
    <div class="flex justify-content-end gap-2">
      <Button size="small" raised type="button" label="Cancel" severity="secondary" @click="visible = false"></Button>
      <Button size="small" raised type="button" label="Save" @click="showToast"></Button>
    </div>
  </Dialog>
</template>

<script setup lang="ts">
import { useToastService } from '@/shared/toast-service'
import { ref } from 'vue'

const visible = ref(false)

const toastService = useToastService()

const showToast = () => {
  toastService.showSuccess('Success')
  visible.value = false
}

const showDialog = () => {
  visible.value = true
}
</script>
