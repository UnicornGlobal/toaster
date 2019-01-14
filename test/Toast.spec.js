import Toast from '../src/Toast.vue'
import Toaster from '../src/main.js'
import { createLocalVue, shallowMount } from '@vue/test-utils'

describe('Toast.vue', () => {
  it('is an Object', () => {
    expect(typeof Toast).toBe('object')
  })

  it('displays error toast', () => {
    const localVue = createLocalVue()
    localVue.use(Toaster)
    const page = shallowMount(Toast, {
      localVue,
      propsData: {
        toast: {
          type: 'error',
          title: 'Error',
          message: 'Items could not be added'
        }
      }
    })

    expect(page.find('.flex-toast-error').is('div')).toBe(true)
    expect(page.find('.toast-header').text()).toEqual('Error')
    expect(page.find('.toast-body').text()).toEqual('Items could not be added')
  })

  it('displays info toast', () => {
    const localVue = createLocalVue()
    localVue.use(Toaster)
    const page = shallowMount(Toast, {
      localVue,
      propsData: {
        toast: {
          type: 'info',
          title: 'Info',
          message: 'Info could not be added'
        }
      }
    })

    expect(page.find('.flex-toast-info').is('div')).toBe(true)
    expect(page.find('.toast-header').text()).toEqual('Info')
    expect(page.find('.toast-body').text()).toEqual('Info could not be added')
  })

  it('displays warning toast', () => {
    const localVue = createLocalVue()
    localVue.use(Toaster)
    const page = shallowMount(Toast, {
      localVue,
      propsData: {
        toast: {
          type: 'warning',
          title: 'Warning',
          message: 'Warning could not be added'
        }
      }
    })

    expect(page.find('.flex-toast-warning').is('div')).toBe(true)
    expect(page.find('.toast-header').text()).toEqual('Warning')
    expect(page.find('.toast-body').text()).toEqual('Warning could not be added')
  })

  it('displays success toast', () => {
    const localVue = createLocalVue()
    localVue.use(Toaster)
    const page = shallowMount(Toast, {
      localVue,
      propsData: {
        toast: {
          type: 'success',
          title: 'Success',
          message: 'Items added successfully',
          timeOut: 3500
        }
      }
    })

    expect(page.find('.flex-toast-success').is('div')).toBe(true)
    expect(page.find('.toast-header').text()).toEqual('Success')
    expect(page.find('.toast-body').text()).toEqual('Items added successfully')
  })
})
