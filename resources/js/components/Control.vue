<template>
    <section class="questBottom" v-if="$store.state.step >= 1 && $store.state.step <= 7">
        <div class="questBottom__wrapper">
            <div class="questBottom__items">
                <div class="questBottom__items_item">
                    <button class="btn btn_prev" @click="$store.state.step--">←</button>
                    <button class="btn btn-pulse btn_effect btn_next" @click="$store.state.step++" v-text="$ml.get('next')"/>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'Control'
}
</script>
<style lang="scss">
@import '../../sass/mixins.scss';
.questBottom{
    padding-top: rem(32);
    padding-bottom: rem(32);
    &__wrapper{
        @include wrapper();
    }
    &__items{
        @include row-flex();
        &_item{
            @include col();
            @include size(24);
            @include size-lg(16);
            @include offset-lg(4);
            display: flex;
            justify-content: center;
        }
    }

    .btn{
        padding: 0; 
    }
}
</style>