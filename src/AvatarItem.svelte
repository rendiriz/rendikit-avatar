<svelte:options tag="rendikit-avatar-item" />

<script lang="typescript">
  import './Avatar.svelte'

  import cssVars from 'svelte-css-vars'
  import { Color } from 'rendikit-theme'

  export let avatar = '<rendikit-avatar />'
  export let primarytext = ''
  export let secondarytext = ''
  export let istruncation: boolean | string = false

  $: styleMain = {
    white: Color.Normal('white'),
    'neutral-600': Color.Normal('N600')
  }

  $: whiteSpace =
    istruncation === 'true' ? `whitespace-normal` : `whitespace-nowrap`

  $: limit1Row = istruncation === 'true' ? `limit-1-row` : ``
</script>

<div use:cssVars={styleMain}>
  {@html avatar}
  <div class="item">
    {#if primarytext !== ''}
      <div class="primary {whiteSpace} {limit1Row}">{primarytext}</div>
    {/if}
    {#if secondarytext !== ''}
      <div class="secondary {whiteSpace} {limit1Row}">{secondarytext}</div>
    {/if}
  </div>
</div>

<style lang="scss">
  @import 'tailwindcss/base';
  @import 'tailwindcss/components';
  @import 'tailwindcss/utilities';

  div {
    @apply flex;

    .item {
      @apply flex flex-col justify-center mx-2;

      .primary {
        @apply font-roboto;
      }

      .secondary {
        @apply font-roboto text-xs;
        color: var(--neutral-600);
      }
    }

    .limit-1-row {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }
  }
</style>
