/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-redeclare */
import { Ref, ref } from 'vue'
import { createSingletonPromise, PermissionDescriptor } from '../utils'
import { useEventListener } from '../useEventListener'
import { ConfigurableNavigator, defaultNavigator } from '../_configurable'

type DescriptorNamePolyfill =
  | 'clipboard-read'
  | 'clipboard-write'
  | 'camera'
  | 'microphone'
  | 'speaker'

export type GeneralPermissionDescriptor =
  | PermissionDescriptor
  | { name: DescriptorNamePolyfill }

export interface UsePermissionOptions<Controls extends boolean>
  extends ConfigurableNavigator {
  /**
   * Expose more controls
   *
   * @default false
   */
  controls?: Controls
}

export type UsePermissionReturn = Readonly<Ref<PermissionState | undefined>>
export interface UsePermissionReturnWithControls {
  state: UsePermissionReturn
  isSupported: boolean
  query: () => Promise<PermissionStatus | undefined>
}

/**
 * Reactive Permissions API.
 *
 */
export function usePermission(
  permissionDesc:
    | GeneralPermissionDescriptor
    | GeneralPermissionDescriptor['name'],
  options?: UsePermissionOptions<false>
): UsePermissionReturn
export function usePermission(
  permissionDesc:
    | GeneralPermissionDescriptor
    | GeneralPermissionDescriptor['name'],
  options: UsePermissionOptions<true>
): UsePermissionReturnWithControls
export function usePermission(
  permissionDesc:
    | GeneralPermissionDescriptor
    | GeneralPermissionDescriptor['name'],
  options: UsePermissionOptions<boolean> = {}
): UsePermissionReturn | UsePermissionReturnWithControls {
  const { controls = false, navigator = defaultNavigator } = options

  const isSupported = Boolean(navigator && 'permissions' in navigator)
  let permissionStatus: PermissionStatus | undefined

  const desc =
    typeof permissionDesc === 'string'
      ? ({ name: permissionDesc } as PermissionDescriptor)
      : (permissionDesc as PermissionDescriptor)
  const state = ref<PermissionState | undefined>()

  const onChange = () => {
    if (permissionStatus) state.value = permissionStatus.state
  }

  const query = createSingletonPromise(async () => {
    if (!isSupported) return
    if (!permissionStatus) {
      try {
        permissionStatus = await navigator!.permissions.query(desc)
        useEventListener(permissionStatus, 'change', onChange)
        onChange()
      } catch {
        state.value = 'prompt'
      }
    }
    // eslint-disable-next-line consistent-return
    return permissionStatus
  })

  query()

  if (controls) {
    return {
      state: state as UsePermissionReturn,
      isSupported,
      query,
    }
  }

  return state as UsePermissionReturn
}
