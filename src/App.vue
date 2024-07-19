<template>
  <div class="layout-wrapper">
    <header class="steelers-header">
      <Menubar :model="topMenuItems" class="p-menubar-dark shadow-4" />
    </header>
    <div class="layout-content">
      <aside>
        <Menu :model="sideMenuItems" class="shadow-2" />
      </aside>
      <main>
        <router-view></router-view>
      </main>
    </div>raised
  </div>

   <Toast position="bottom-right" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Menubar from 'primevue/menubar'
import Menu from 'primevue/menu'
import router from './router'

const topMenuItems = ref([
  {
    label: 'Home',
    icon: 'pi pi-fw pi-home',
    command: () => router.push('/')
  },
  {
    label: 'Services',
    icon: 'pi pi-fw pi-cog',
    command: () => router.push('/services')
  },
  {
    label: 'Knowledge',
    icon: 'pi pi-fw pi-book',
    command: () => router.push('/knowledge')
  }
])

const sideMenuItems = ref([
  {
    label: 'Dashboard',
    icon: 'pi pi-fw pi-th-large',
    command: () => router.push('/dashboard')
  },
  {
    label: 'Tickets',
    icon: 'pi pi-fw pi-ticket',
    command: () => router.push('/tickets')
  },
  {
    label: 'Reports',
    icon: 'pi pi-fw pi-chart-bar',
    command: () => router.push('/reports')
  }
])
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

.layout-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.steelers-header {
  background-color: #000000;
}

.steelers-header .p-menubar {
  background-color: #000000;
  border: none;
  border-radius: 0;
  padding: 0.5rem 1rem;
}

.steelers-header .p-menubar .p-menuitem-link:not(.p-disabled):hover {
  color: #000000 !important; /* Change text color to black on hover */
}

.steelers-header .p-menubar .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text,
.steelers-header .p-menubar .p-menuitem-link:not(.p-disabled):hover .p-menuitem-icon {
  color: #000000 !important; /* Change text color to black on hover */
}

.steelers-sidebar.p-menu .p-menuitem-link:not(.p-disabled):hover {
  color: #000000 !important; /* Change text color to black on hover */
}

.steelers-sidebar.p-menu .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text,
.steelers-sidebar.p-menu .p-menuitem-link:not(.p-disabled):hover .p-menuitem-icon {
  color: #000000 !important; /* Change text color to black on hover */
}





.steelers-header .p-menubar .p-menuitem-link,
.steelers-header .p-menubar .p-menuitem-link .p-menuitem-text,
.steelers-header .p-menubar .p-menuitem-link .p-menuitem-icon {
  color: #f7df07 !important;
}

.steelers-header .p-menubar .p-menuitem-link:not(.p-disabled):hover {
  background-color: rgba(255, 182, 18, 0.1);
}

.layout-content {
  display: flex;
  flex-grow: 1;
}

aside {
  width: 250px;
  background-color: #f8f9fa;
}

.steelers-sidebar.p-menu {
  width: 100%;
  border: none;
  background-color: #f8f9fa;
}

.steelers-sidebar.p-menu .p-menuitem-link {
  padding: 0.75rem 1rem;
}

.steelers-sidebar.p-menu .p-menuitem-link:not(.p-disabled):hover {
  background-color: #e9ecef;  
}

main {
  flex-grow: 1;
  padding: 1rem;
}
</style>
c