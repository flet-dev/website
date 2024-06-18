---
title: TileLayer
sidebar_label: TileLayer
---

The main layer of the map, displaying square raster images in a continuous grid.

## Examples

See [Map Control](/docs/controls/map).

## `TileLayer` Properties

### `additional_options`

A dictionary containing static information that should replace placeholders in the `url_template`. Applying API keys is a good example.

### `enable_retina_mode`

A boolean indicating whether to enable retina mode.

### `enable_tms`

Whether to enable [TMS](https://en.wikipedia.org/wiki/Tile_Map_Service)(Tile Map Service).

### `error_image_src`

The source for an error image. Can be a URL or path to an image asset file.

### `evict_error_tile_strategy`

The strategy for evicting error tiles. If a Tile was loaded with error and strategy isn't `None`, it will be evicted based on specified strategy.

### `fallback_url`

A fallback URL to use if an error occurs when fetching tiles from the `url_template`.

### `keep_alive`

A boolean indicating whether to keep the map alive.

### `keep_buffer`

The number of rows and columns of tiles to keep (when panning the map) before unloading.

### `max_native_zoom`

The maximum native zoom level.

### `max_zoom`

The maximum zoom level.

### `min_native_zoom`

The minimum native zoom level.

### `min_zoom`

The minimum zoom level.

### `pan_buffer`

When loading tiles only visible tiles are loaded by default. 
This option increases the loaded tiles by the given number on both axis which can help prevent the user from seeing loading tiles whilst panning. 

Setting the pan buffer too high can impact performance, typically this is set to `0` or `1`.

### `subdomains`

A list of subdomains for the tile server.

### `tile_bounds`

The geographical bounds for the tiles. Meaning only tiles inside this bounds will be loaded.

Value is of type [`MapLatitudeLongitudeBounds`](/docs/reference/types/maplatitudelongitudebounds).

### `tile_size`

The size of each tile.

Defaults to `256`.

### `url_template`

The template URL for retrieving tile images. This is a string that contains placeholders, which, when filled in, create a URL/URI to a specific tile.

### `zoom_offset`

The zoom number used in tile URLs will be offset with this value.

### `zoom_reverse`

Whether to reverse the zoom number used in the tile URLs.

## Events

### `on_image_error`

Event handler for image error events.
