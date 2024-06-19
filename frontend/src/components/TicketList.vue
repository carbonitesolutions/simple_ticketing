<template>
  <div>
    <div class="m-5 flex items-center justify-between">
      <h1>Support Tickets</h1>
      <Button @click="addTicketDialogShown = true" variant="solid"> + Add Ticket</Button>
    </div>
    
  <ListView :options="{
  selectable:false,
  resizeColumn: true,
  emptyState: {
      title: 'No Tickets Found',
      description: 'Create a new Ticket',
      button: {
        label: 'New Ticket',
        variant: 'solid',
        onClick: () => console.log('New Record'),
      },
    },
}"

:columns="[
  {
     'label': 'Title',
     'key': 'title'
  },
  {
     'label': 'Category',
     'key': 'category'
  },
  {
     'label': 'Status',
     'key': 'status'
  }
  ]" 
  
  :rows="ticketlist.data"
  :row-key="key"
/>
  </div>

<Dialog
  :options="{
    title: 'Add a Ticket',
    size: 'xl',
    actions: [
      {
        label: 'Add Ticket',
        variant: 'solid',
        onClick: () => {
                },
      },
    ],
  }"
  v-model="addTicketDialogShown"
>
  <template #body-content>
    joisnd
  </template>
</Dialog>

</template>

<script setup>
import { ListView, createListResource, Button, Dialog } from 'frappe-ui'
import { ref } from 'vue'

const ticketlist = createListResource ({
 doctype: "Support Ticket",
 fields: ["title", "category", "status"],
 auto: true
})

const addTicketDialogShown = ref(false);
</script>