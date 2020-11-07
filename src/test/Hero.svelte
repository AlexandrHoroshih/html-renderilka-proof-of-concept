<script>
    import Button from './Button.svelte';
    export let someProp = 'default';
</script>

<article>
    <div>
        {someProp}
    </div>
    <Button isHighlighted>{someProp}</Button>
</article>
