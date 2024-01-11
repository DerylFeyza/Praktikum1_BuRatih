// ConversionHandler.jsx
class ConversionHandler {
	static handleConvert(bilangan, tobilangan, value) {
		switch (bilangan) {
			case "decimal":
				return ConversionHandler.decimalToOther(value, tobilangan);
			case "binary":
				return ConversionHandler.binaryToOther(value, tobilangan);
			case "octal":
				return ConversionHandler.octalToOther(value, tobilangan);
			case "hexadecimal":
				return ConversionHandler.hexadecimalToOther(value, tobilangan);
			default:
				return null;
		}
	}

	static decimalToOther(value, toBase) {
		const decimalValue = parseInt(value, 10);
		switch (toBase) {
			case "binary":
				return (decimalValue >>> 0).toString(2);
			case "octal":
				return decimalValue.toString(8);
			case "hexadecimal":
				return decimalValue.toString(16).toUpperCase();
			default:
				return null;
		}
	}

	static binaryToOther(value, toBase) {
		const decimalValue = parseInt(value, 2);
		switch (toBase) {
			case "decimal":
				return decimalValue.toString(10);
			case "octal":
				return decimalValue.toString(8);
			case "hexadecimal":
				return decimalValue.toString(16).toUpperCase();
			default:
				return null;
		}
	}

	static octalToOther(value, toBase) {
		const decimalValue = parseInt(value, 8);
		switch (toBase) {
			case "decimal":
				return decimalValue.toString(10);
			case "binary":
				return (decimalValue >>> 0).toString(2);
			case "hexadecimal":
				return decimalValue.toString(16).toUpperCase();
			default:
				return null;
		}
	}

	static hexadecimalToOther(value, toBase) {
		const decimalValue = parseInt(value, 16);
		switch (toBase) {
			case "decimal":
				return decimalValue.toString(10);
			case "binary":
				return (decimalValue >>> 0).toString(2);
			case "octal":
				return decimalValue.toString(8);
			default:
				return null;
		}
	}
}

export default ConversionHandler;
