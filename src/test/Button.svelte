<script>
    export let isHighlighted = false;
</script>

<style>
    .isHighlighted {
        background-color: crimson;
    }
</style>

<button type="button" class:isHighlighted>
    <slot></slot>
</button>
