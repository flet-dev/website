---
title: Map
sidebar_label: Map
---

Used to display a map with various layers.

:::info Packaging
To build your Flet app that uses `Map` control add `--include-packages flet_map` to `flet build` command, for example:

```
flet build apk --include-packages flet_map
```

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

[Live example](https://flet-controls-gallery.fly.dev/displays/map)

### Example

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import random
import flet as ft
import flet.map as map


def main(page: ft.Page):
    marker_layer_ref = ft.Ref[map.MarkerLayer]()
    circle_layer_ref = ft.Ref[map.CircleLayer]()

    def handle_tap(e: map.MapTapEvent):
        print(
            f"Name: {e.name} - coordinates: {e.coordinates} - Local: ({e.local_x}, {e.local_y}) - Global: ({e.global_x}, {e.global_y})"
        )
        if e.name == "tap":
            marker_layer_ref.current.markers.append(
                map.Marker(
                    content=ft.Icon(
                        ft.icons.LOCATION_ON, color=ft.cupertino_colors.DESTRUCTIVE_RED
                    ),
                    coordinates=e.coordinates,
                )
            )
        elif e.name == "secondary_tap":
            circle_layer_ref.current.circles.append(
                map.CircleMarker(
                    radius=random.randint(5, 10),
                    coordinates=e.coordinates,
                    color=ft.colors.random_color(),
                    border_color=ft.colors.random_color(),
                    border_stroke_width=4,
                )
            )
        page.update()

    def handle_event(e: map.MapEvent):
        print(
            f"{e.name} - Source: {e.source} - Center: {e.center} - Zoom: {e.zoom} - Rotation: {e.rotation}"
        )

    page.add(
        ft.Text("Click anywhere to add a Marker, right-click to add a CircleMarker."),
        map.Map(
            expand=True,
            on_init=lambda e: print(f"Initialized Map"),
            on_tap=handle_tap,
            on_secondary_tap=handle_tap,
            on_long_press=handle_tap,
            on_event=handle_event,
            configuration=map.MapConfiguration(
                initial_center=map.MapLatitudeLongitude(15, 10),
                initial_zoom=4.2,
                interaction_configuration=map.MapInteractionConfiguration(
                    flags=map.MapInteractiveFlag.ALL
                ),
            ),
            layers=[
                map.TileLayer(
                    url_template="https://tile.openstreetmap.org/{z}/{x}/{y}.png",
                    on_image_error=lambda e: print("TileLayer Error"),
                ),
                map.RichAttribution(
                    attributions=[
                        map.TextSourceAttribution(
                            text="OpenStreetMap Contributors",
                            on_click=lambda e: e.page.launch_url(
                                "https://openstreetmap.org/copyright"
                            ),
                        ),
                        map.TextSourceAttribution(
                            text="Flet",
                            on_click=lambda e: e.page.launch_url("https://flet.dev"),
                        ),
                    ]
                ),
                map.SimpleAttribution(
                    text="Flet",
                    alignment=ft.alignment.top_right,
                    on_click=lambda e: print("Clicked SimpleAttribution"),
                ),
                map.MarkerLayer(
                    ref=marker_layer_ref,
                    markers=[
                        map.Marker(
                            content=ft.Icon(ft.icons.LOCATION_ON),
                            coordinates=map.MapLatitudeLongitude(30, 15),
                        ),
                        map.Marker(
                            content=ft.Icon(ft.icons.LOCATION_ON),
                            coordinates=map.MapLatitudeLongitude(10, 10),
                        ),
                        map.Marker(
                            content=ft.Icon(ft.icons.LOCATION_ON),
                            coordinates=map.MapLatitudeLongitude(25, 45),
                        ),
                    ],
                ),
                map.CircleLayer(
                    ref=circle_layer_ref,
                    circles=[
                        map.CircleMarker(
                            radius=10,
                            coordinates=map.MapLatitudeLongitude(16, 24),
                            color=ft.colors.RED,
                            border_color=ft.colors.BLUE,
                            border_stroke_width=4,
                        ),
                    ],
                ),
                map.PolygonLayer(
                    polygons=[
                        map.PolygonMarker(
                            label="Popular Touristic Area",
                            label_text_style=ft.TextStyle(
                                color=ft.colors.BLACK,
                                size=15,
                                weight=ft.FontWeight.BOLD,
                            ),
                            color=ft.colors.with_opacity(0.3, ft.colors.BLUE),
                            coordinates=[
                                map.MapLatitudeLongitude(10, 10),
                                map.MapLatitudeLongitude(30, 15),
                                map.MapLatitudeLongitude(25, 45),
                            ],
                        ),
                    ],
                ),
                map.PolylineLayer(
                    polylines=[
                        map.PolylineMarker(
                            border_stroke_width=3,
                            border_color=ft.colors.RED,
                            gradient_colors=[ft.colors.BLACK, ft.colors.BLACK],
                            color=ft.colors.with_opacity(0.6, ft.colors.GREEN),
                            coordinates=[
                                map.MapLatitudeLongitude(10, 10),
                                map.MapLatitudeLongitude(30, 15),
                                map.MapLatitudeLongitude(25, 45),
                            ],
                        ),
                    ],
                ),
            ],
        ),
    )


ft.app(main)
```
  </TabItem>
</Tabs>

<img src="/img/docs/controls/map/map-example.png" className="screenshot-50" />

## `Map` Properties

### `configuration`

A `MapConfiguration` object that defines the initial state of the map and its interaction configuration.

Value is of type [`MapConfiguration`](/docs/reference/types/mapconfiguration).

### `layers`

A list of layers to be displayed on the map.

Value is of type [`MapLayer`](/docs/reference/types/maplayer).

## Events

### `on_event`

Fires when any map events occurs.

Event handler argument is of type [`MapEvent`](/docs/reference/types/mapevent).

### `on_hover`

Fires when a hover event occurs.

Event handler argument is of type [`MapHoverEvent`](/docs/reference/types/maphoverevent).

### `on_init`

Fires when the map is initialized.

### `on_long_press`

Fires when a long press event occurs.

Event handler argument is of type [`MapTapEvent`](/docs/reference/types/maptapevent).

### `on_position_change`

Fires when the map position changes.

Event handler argument is of type [`MapPositionChangeEvent`](/docs/reference/types/mappositionchangeevent).

### `on_pointer_down`

Fires when a pointer down event occurs.

Event handler argument is of type [`MapPointerEvent`](/docs/reference/types/mappointerevent).

### `on_pointer_cancel`

Fires when a pointer cancel event occurs.

Event handler argument is of type [`MapPointerEvent`](/docs/reference/types/mappointerevent).

### `on_pointer_up`

Fires when a pointer up event occurs.

Event handler argument is of type [`MapPointerEvent`](/docs/reference/types/mappointerevent).

### `on_secondary_tap`

Fires when a secondary tap event occurs.

Event handler argument is of type [`MapTapEvent`](/docs/reference/types/maptapevent).

### `on_tap`

Fires when a tap event occurs.

Event handler argument is of type [`MapTapEvent`](/docs/reference/types/maptapevent).



## Methods

### `rotate_from`

### `reset_rotation`


### `zoom_in`


### `zoom_out`


### `zoom_to`


### `move_to`


### `center_on`

