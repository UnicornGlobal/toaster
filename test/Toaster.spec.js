import Toaster from '../src/Toaster.vue'
import emitter from '../src/emitter'
import sinon from 'sinon'
import { createLocalVue, shallow } from '@vue/test-utils'

describe('Toaster.vue', () => {
  it('is an Object', () => {
    expect(typeof Toaster).toBe('object')
  })

  it('responds to events and add new toast', (done) => {
    const localVue = createLocalVue()
    const spy = sinon.spy(Toaster.methods, 'addToast')
    const spy2 = sinon.spy(Toaster.methods, 'closeToast')
    const wrapper = shallow(Toaster, {
      localVue
    })
    emitter.emit('addToast', {
      type: 'error',
      title: 'Error',
      message: 'Item could not be added'
    })
    expect(spy.called).toBe(true)
    wrapper.update()
    expect(wrapper.vm.toasts.length).toBe(1)
    setTimeout(() => {
      expect(spy2.called).toBe(true)
      wrapper.update()
      expect(wrapper.vm.toasts.length).toBe(0)
      done()
    }, 4000)
  })

  it('removes eventListener on page destroy', () => {
    const localVue = createLocalVue()
    const spy = sinon.spy(emitter, 'removeListener')
    const wrapper = shallow(Toaster, {
      localVue
    })
    wrapper.destroy()
    expect(spy.called).toBe(true)
  })
})
