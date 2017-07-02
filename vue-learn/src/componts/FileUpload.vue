<template>
    <div>
        <slot name="slot_start"></slot>
        <slot></slot>
        <slot name="slot_end"></slot>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
    }
</script>