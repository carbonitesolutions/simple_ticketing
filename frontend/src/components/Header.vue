<template>
  <div class="cursor-pointer m-2 flex items-center justify-between">
    <img
      class="h-8"
      src="https://media.istockphoto.com/id/1265111441/vector/circle-swoosh-with-hand-care-inside.jpg?s=612x612&w=0&k=20&c=qmcwdMKI1ZLF3djInsklBLkZPYPIr-X6se75BWfum7w="
    />
    <Dropdown
      :options="[
        {
          label: 'Switch to Desk',
          onClick: () => {},
        }
      ]"
    >
      <Avatar
        :shape="'circle'"
        image="https://i.pravatar.cc/100"
        label="EY"
        size="md"
      />
    </Dropdown>
  </div>
</template>


<script setup>
import { Avatar, Dropdown, FeatherIcon } from 'frappe-ui'
</script>