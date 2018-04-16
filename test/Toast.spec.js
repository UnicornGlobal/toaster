import Toast from '../src/Toast.vue'
import { createLocalVue, shallow } from '@vue/test-utils'

describe('Toast.vue', () => {
  it('is an Object', () => {
    expect(typeof Toast).toBe('object')
  })

  it('displays error toast', () => {
    const localVue = createLocalVue()
    const page = shallow(Toast, {
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

  it('displays success toast', () => {
    const localVue = createLocalVue()
    const page = shallow(Toast, {
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