export type CameraZoomDistanceResponse = {
  method: 'camera_zoom_distance_response';
  min_distance: number;
  max_distance: number;
  current_distance: number;
  horizontal_offset: number;
  max_horizontal_offset: number;
};

export type EnableSoundMessage = {
  method: 'enable_sound_message';
  enabled: boolean;
};

export type DisplaySizeMessage = {
  method: 'display_size';
  width: number;
  height: number;
};

export type ParentMessage =
  | CameraZoomDistanceResponse
  | EnableSoundMessage
  | DisplaySizeMessage
  | { method: string; [key: string]: unknown };

export type ParentResponse =
  | { ok: true; value: ParentMessage }
  | { ok: false };

export type CameraZoomDistanceRequest = { method: 'camera_zoom_distance_request' };
export type SetPossibleCameraParametersRequest = {
  method: 'set_possible_camera_parameters_request';
  currentZoom: number;
  horizontalOffset: number;
  verticalOffset: number;
};
export type SetCameraParametersRequest = {
  method: 'set_camera_parameters_request';
  currentZoom: number;
  horizontalOffset: number;
  verticalOffset: number;
};
export type MountedRequest = { method: 'mounted' };

export type ParentRequest =
  | CameraZoomDistanceRequest
  | SetPossibleCameraParametersRequest
  | SetCameraParametersRequest
  | MountedRequest
  | { method: string; [key: string]: unknown };

export function parseMessageFromParent(event: MessageEvent): ParentResponse {
  if (!event || typeof event.data !== 'object' || event.data === null) {
    return { ok: false };
  }

  const maybeMethod = (event.data as { method?: unknown }).method;
  if (typeof maybeMethod !== 'string') {
    return { ok: false };
  }

  return { ok: true, value: event.data as ParentMessage };
}

export function sendRequestToParent(message: ParentRequest): void {
  if (typeof window === 'undefined') {
    return;
  }

  const target = window.parent ?? window;
  target.postMessage(message, '*');
}
