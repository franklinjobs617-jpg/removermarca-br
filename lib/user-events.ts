// 用户行为事件触发器
export const triggerUserEvent = (eventType: string, data?: any) => {
  const event = new CustomEvent(eventType, { detail: data })
  window.dispatchEvent(event)
}

// 预定义的事件类型
export const USER_EVENTS = {
  DOWNLOADED_IMAGE: 'user-downloaded-image',
  ENGAGED_EDITOR: 'user-engaged-editor',
  STARTED_PROCESSING: 'user-started-processing',
  COMPLETED_PROCESSING: 'user-completed-processing'
} as const

// 便捷函数
export const userDownloadedImage = (imageData?: any) => {
  triggerUserEvent(USER_EVENTS.DOWNLOADED_IMAGE, imageData)
}

export const userEngagedEditor = (engagementData?: any) => {
  triggerUserEvent(USER_EVENTS.ENGAGED_EDITOR, engagementData)
}

export const userStartedProcessing = (processingData?: any) => {
  triggerUserEvent(USER_EVENTS.STARTED_PROCESSING, processingData)
}

export const userCompletedProcessing = (resultData?: any) => {
  triggerUserEvent(USER_EVENTS.COMPLETED_PROCESSING, resultData)
}