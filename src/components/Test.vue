this.meta{
    ...this.meta,
    count: this.meta.count + 1
}
this.$set(this.meta, "count", this.meta.count + 1)
