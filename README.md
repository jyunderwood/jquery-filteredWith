# jquery.filteredWith.js

Allows filtering a `select` element based on another `select` element.

## Usage

filterWith matches the optgroup label of the `select` to be filtered with the text of the `select` that it's filtered with.

    <select name="makes" id="makes">
      <option value="">All Makes</option>
      <option value="2">BMW</option>
      <option value="2">Chevrolet</option>
    </select>

    <select name="models" id="models">
      <option value="">All Models</option>

      <optgroup label="BMW">
        <option value="116">1-Series</option>
        <option value="233">3-Series</option>
      </optgroup>

      <optgroup label="Chevrolet">
        <option value="173">Avalanche</option>
        <option value="115">Aveo</option>
      </optgroup>
    </select>

    <script>
      $('#models').filteredWith('#makes', subText: 'All Models for Make');
    </script>

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Added some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## License

Licensed under the MIT License.
