<template>
    <div>
        <input type="file" ref="uploaded_image">
        <input type="text" ref="image_description" placeholder="description of photo">
        <select name="photo type" id="type">
            <option value="design">Design</option>
            <option value="misc">Misc</option>
            <option value="portraits">Portraits</option>
        </select>
        <button @click="addphoto">add photo</button>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped></style>