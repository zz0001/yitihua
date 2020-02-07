/**
 * <p>此模块是为解决前后端参数加解密实现的，前端加密参数后台可以解密，后台加密的参数前端可以解密。</p>
 * <p>有配套的后台加解密工具。</p>
 * <p style="color:blue;">全局访问标识：_paramsEncode和_paramsDecode</p>
 * @module pe
 * @class pe
 * @author Grahor
 */
(function() {
	function A(b) {
		for (var a = [], d = b.length, e = parseInt(d / 4), h = d % 4, p = 0, p = 0; p < e; p++) a[p] = C(b.substring(4 * p + 0, 4 * p + 4));
		0 < h && (a[p] = C(b.substring(4 * p + 0, d)));
		return a
	}
	function C(b) {
		var a = b.length,
			d = Array(64);
		if (4 > a) {
			for (var e = 0, h = 0, e = e = 0; e < a; e++) for (var p = b.charCodeAt(e), h = 0; 16 > h; h++) {
				for (var q = 1, f = 0, f = 15; f > h; f--) q *= 2;
				d[16 * e + h] = parseInt(p / q) % 2
			}
			for (e = a; 4 > e; e++) for (h = p = 0; 16 > h; h++) {
				q = 1;
				for (f = 15; f > h; f--) q *= 2;
				d[16 * e + h] = parseInt(p / q) % 2
			}
		} else for (e = 0; 4 > e; e++) for (p = b.charCodeAt(e), h = 0; 16 > h; h++) {
			q = 1;
			for (f = 15; f > h; f--) q *= 2;
			d[16 * e + h] = parseInt(p / q) % 2
		}
		return d
	}
	function E(b) {
		var a = "";
		for (i = 0; 16 > i; i++) {
			var d = "";
			for (j = 0; 4 > j; j++) d += b[4 * i + j];
			var e = void 0;
			switch (d) {
			case "0000":
				e = "0";
				break;
			case "0001":
				e = "1";
				break;
			case "0010":
				e = "2";
				break;
			case "0011":
				e = "3";
				break;
			case "0100":
				e = "4";
				break;
			case "0101":
				e = "5";
				break;
			case "0110":
				e = "6";
				break;
			case "0111":
				e = "7";
				break;
			case "1000":
				e = "8";
				break;
			case "1001":
				e = "9";
				break;
			case "1010":
				e = "A";
				break;
			case "1011":
				e = "B";
				break;
			case "1100":
				e = "C";
				break;
			case "1101":
				e = "D";
				break;
			case "1110":
				e = "E";
				break;
			case "1111":
				e = "F"
			}
			a += e
		}
		return a
	}
	function t(b, a) {
		for (var d = F(a), e = G(b), h = Array(32), p = Array(32), q = Array(32), f = 0, l = 0, f = f = 0; 32 > f; f++) h[f] = e[f], p[f] = e[32 + f];
		for (f = 0; 16 > f; f++) {
			for (l = 0; 32 > l; l++) q[l] = h[l], h[l] = p[l];
			e = Array(48);
			for (l = 0; 48 > l; l++) e[l] = d[f][l];
			e = D(H(I(D(J(p), e))), q);
			for (l = 0; 32 > l; l++) p[l] = e[l]
		}
		d = Array(64);
		for (f = 0; 32 > f; f++) d[f] = p[f], d[32 + f] = h[f];
		return K(d)
	}
	function B(b, a) {
		for (var d = F(a), e = G(b), h = Array(32), p = Array(32), q = Array(32), f = 0, l = 0, f = f = 0; 32 > f; f++) h[f] = e[f], p[f] = e[32 + f];
		for (f = 15; 0 <= f; f--) {
			for (l = 0; 32 > l; l++) q[l] = h[l], h[l] = p[l];
			e = Array(48);
			for (l = 0; 48 > l; l++) e[l] = d[f][l];
			e = D(H(I(D(J(p), e))), q);
			for (l = 0; 32 > l; l++) p[l] = e[l]
		}
		d = Array(64);
		for (f = 0; 32 > f; f++) d[f] = p[f], d[32 + f] = h[f];
		return K(d)
	}
	function G(b) {
		var a = Array(64);
		i = 0;
		m = 1;
		for (n = 0; 4 > i; i++, m += 2, n += 2) for (j = 7, k = 0; 0 <= j; j--, k++) a[8 * i + k] = b[8 * j + m], a[8 * i + k + 32] = b[8 * j + n];
		return a
	}
	function J(b) {
		var a = Array(48);
		for (i = 0; 8 > i; i++) a[6 * i + 0] = 0 == i ? b[31] : b[4 * i - 1], a[6 * i + 1] = b[4 * i + 0], a[6 * i + 2] = b[4 * i + 1], a[6 * i + 3] = b[4 * i + 2], a[6 * i + 4] = b[4 * i + 3], a[6 * i + 5] = 7 == i ? b[0] : b[4 * i + 4];
		return a
	}
	function D(b, a) {
		var d = Array(b.length);
		for (i = 0; i < b.length; i++) d[i] = b[i] ^ a[i];
		return d
	}
	function I(b) {
		var a = Array(32),
			d = "",
			e = [
				[14, 4, 13, 1, 2, 15, 11, 8, 3, 10, 6, 12, 5, 9, 0, 7],
				[0, 15, 7, 4, 14, 2, 13, 1, 10, 6, 12, 11, 9, 5, 3, 8],
				[4, 1, 14, 8, 13, 6, 2, 11, 15, 12, 9, 7, 3, 10, 5, 0],
				[15, 12, 8, 2, 4, 9, 1, 7, 5, 11, 3, 14, 10, 0, 6, 13]
			],
			h = [
				[15, 1, 8, 14, 6, 11, 3, 4, 9, 7, 2, 13, 12, 0, 5, 10],
				[3, 13, 4, 7, 15, 2, 8, 14, 12, 0, 1, 10, 6, 9, 11, 5],
				[0, 14, 7, 11, 10, 4, 13, 1, 5, 8, 12, 6, 9, 3, 2, 15],
				[13, 8, 10, 1, 3, 15, 4, 2, 11, 6, 7, 12, 0, 5, 14, 9]
			],
			p = [
				[10, 0, 9, 14, 6, 3, 15, 5, 1, 13, 12, 7, 11, 4, 2, 8],
				[13, 7, 0, 9, 3, 4, 6, 10, 2, 8, 5, 14, 12, 11, 15, 1],
				[13, 6, 4, 9, 8, 15, 3, 0, 11, 1, 2, 12, 5, 10, 14, 7],
				[1, 10, 13, 0, 6, 9, 8, 7, 4, 15, 14, 3, 11, 5, 2, 12]
			],
			q = [
				[7, 13, 14, 3, 0, 6, 9, 10, 1, 2, 8, 5, 11, 12, 4, 15],
				[13, 8, 11, 5, 6, 15, 0, 3, 4, 7, 2, 12, 1, 10, 14, 9],
				[10, 6, 9, 0, 12, 11, 7, 13, 15, 1, 3, 14, 5, 2, 8, 4],
				[3, 15, 0, 6, 10, 1, 13, 8, 9, 4, 5, 11, 12, 7, 2, 14]
			],
			f = [
				[2, 12, 4, 1, 7, 10, 11, 6, 8, 5, 3, 15, 13, 0, 14, 9],
				[14, 11, 2, 12, 4, 7, 13, 1, 5, 0, 15, 10, 3, 9, 8, 6],
				[4, 2, 1, 11, 10, 13, 7, 8, 15, 9, 12, 5, 6, 3, 0, 14],
				[11, 8, 12, 7, 1, 14, 2, 13, 6, 15, 0, 9, 10, 4, 5, 3]
			],
			l = [
				[12, 1, 10, 15, 9, 2, 6, 8, 0, 13, 3, 4, 14, 7, 5, 11],
				[10, 15, 4, 2, 7, 12, 9, 5, 6, 1, 13, 14, 0, 11, 3, 8],
				[9, 14, 15, 5, 2, 8, 12, 3, 7, 0, 4, 10, 1, 13, 11, 6],
				[4, 3, 2, 12, 9, 5, 15, 10, 11, 14, 1, 7, 6, 0, 8, 13]
			],
			t = [
				[4, 11, 2, 14, 15, 0, 8, 13, 3, 12, 9, 7, 5, 10, 6, 1],
				[13, 0, 11, 7, 4, 9, 1, 10, 14, 3, 5, 12, 2, 15, 8, 6],
				[1, 4, 11, 13, 12, 3, 7, 14, 10, 15, 6, 8, 0, 5, 9, 2],
				[6, 11, 13, 8, 1, 4, 10, 7, 9, 5, 0, 15, 14, 2, 3, 12]
			],
			x = [
				[13, 2, 8, 4, 6, 15, 11, 1, 10, 9, 3, 14, 5, 0, 12, 7],
				[1, 15, 13, 8, 10, 3, 7, 4, 12, 5, 6, 11, 0, 14, 9, 2],
				[7, 11, 4, 1, 9, 12, 14, 2, 0, 6, 10, 13, 15, 3, 5, 8],
				[2, 1, 14, 7, 4, 10, 8, 13, 15, 12, 9, 0, 3, 5, 6, 11]
			];
		for (m = 0; 8 > m; m++) {
			var v = 0,
				g = 0,
				v = 2 * b[6 * m + 0] + b[6 * m + 5],
				g = 8 * b[6 * m + 1] + 4 * b[6 * m + 2] + 2 * b[6 * m + 3] + b[6 * m + 4];
			switch (m) {
			case 0:
				d = y(e[v][g]);
				break;
			case 1:
				d = y(h[v][g]);
				break;
			case 2:
				d = y(p[v][g]);
				break;
			case 3:
				d = y(q[v][g]);
				break;
			case 4:
				d = y(f[v][g]);
				break;
			case 5:
				d = y(l[v][g]);
				break;
			case 6:
				d = y(t[v][g]);
				break;
			case 7:
				d = y(x[v][g])
			}
			a[4 * m + 0] = parseInt(d.substring(0, 1));
			a[4 * m + 1] = parseInt(d.substring(1, 2));
			a[4 * m + 2] = parseInt(d.substring(2, 3));
			a[4 * m + 3] = parseInt(d.substring(3, 4))
		}
		return a
	}
	function H(b) {
		var a = Array(32);
		a[0] = b[15];
		a[1] = b[6];
		a[2] = b[19];
		a[3] = b[20];
		a[4] = b[28];
		a[5] = b[11];
		a[6] = b[27];
		a[7] = b[16];
		a[8] = b[0];
		a[9] = b[14];
		a[10] = b[22];
		a[11] = b[25];
		a[12] = b[4];
		a[13] = b[17];
		a[14] = b[30];
		a[15] = b[9];
		a[16] = b[1];
		a[17] = b[7];
		a[18] = b[23];
		a[19] = b[13];
		a[20] = b[31];
		a[21] = b[26];
		a[22] = b[2];
		a[23] = b[8];
		a[24] = b[18];
		a[25] = b[12];
		a[26] = b[29];
		a[27] = b[5];
		a[28] = b[21];
		a[29] = b[10];
		a[30] = b[3];
		a[31] = b[24];
		return a
	}
	function K(b) {
		var a = Array(64);
		a[0] = b[39];
		a[1] = b[7];
		a[2] = b[47];
		a[3] = b[15];
		a[4] = b[55];
		a[5] = b[23];
		a[6] = b[63];
		a[7] = b[31];
		a[8] = b[38];
		a[9] = b[6];
		a[10] = b[46];
		a[11] = b[14];
		a[12] = b[54];
		a[13] = b[22];
		a[14] = b[62];
		a[15] = b[30];
		a[16] = b[37];
		a[17] = b[5];
		a[18] = b[45];
		a[19] = b[13];
		a[20] = b[53];
		a[21] = b[21];
		a[22] = b[61];
		a[23] = b[29];
		a[24] = b[36];
		a[25] = b[4];
		a[26] = b[44];
		a[27] = b[12];
		a[28] = b[52];
		a[29] = b[20];
		a[30] = b[60];
		a[31] = b[28];
		a[32] = b[35];
		a[33] = b[3];
		a[34] = b[43];
		a[35] = b[11];
		a[36] = b[51];
		a[37] = b[19];
		a[38] = b[59];
		a[39] = b[27];
		a[40] = b[34];
		a[41] = b[2];
		a[42] = b[42];
		a[43] = b[10];
		a[44] = b[50];
		a[45] = b[18];
		a[46] = b[58];
		a[47] = b[26];
		a[48] = b[33];
		a[49] = b[1];
		a[50] = b[41];
		a[51] = b[9];
		a[52] = b[49];
		a[53] = b[17];
		a[54] = b[57];
		a[55] = b[25];
		a[56] = b[32];
		a[57] = b[0];
		a[58] = b[40];
		a[59] = b[8];
		a[60] = b[48];
		a[61] = b[16];
		a[62] = b[56];
		a[63] = b[24];
		return a
	}
	function y(b) {
		var a = "";
		switch (b) {
		case 0:
			a = "0000";
			break;
		case 1:
			a = "0001";
			break;
		case 2:
			a = "0010";
			break;
		case 3:
			a = "0011";
			break;
		case 4:
			a = "0100";
			break;
		case 5:
			a = "0101";
			break;
		case 6:
			a = "0110";
			break;
		case 7:
			a = "0111";
			break;
		case 8:
			a = "1000";
			break;
		case 9:
			a = "1001";
			break;
		case 10:
			a = "1010";
			break;
		case 11:
			a = "1011";
			break;
		case 12:
			a = "1100";
			break;
		case 13:
			a = "1101";
			break;
		case 14:
			a = "1110";
			break;
		case 15:
			a = "1111"
		}
		return a
	}
	function F(b) {
		for (var a = Array(56), d = [
			[],
			[],
			[],
			[],
			[],
			[],
			[],
			[],
			[],
			[],
			[],
			[],
			[],
			[],
			[],
			[]
		], e = [1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1], h = 0; 7 > h; h++) for (j = 0, k = 7; 8 > j; j++, k--) a[8 * h + j] = b[8 * k + h];
		for (h = 0; 16 > h; h++) {
			var p = 0;
			for (j = 0; j < e[h]; j++) {
				b = a[0];
				p = a[28];
				for (k = 0; 27 > k; k++) a[k] = a[k + 1], a[28 + k] = a[29 + k];
				a[27] = b;
				a[55] = p
			}
			b = Array(48);
			b[0] = a[13];
			b[1] = a[16];
			b[2] = a[10];
			b[3] = a[23];
			b[4] = a[0];
			b[5] = a[4];
			b[6] = a[2];
			b[7] = a[27];
			b[8] = a[14];
			b[9] = a[5];
			b[10] = a[20];
			b[11] = a[9];
			b[12] = a[22];
			b[13] = a[18];
			b[14] = a[11];
			b[15] = a[3];
			b[16] = a[25];
			b[17] = a[7];
			b[18] = a[15];
			b[19] = a[6];
			b[20] = a[26];
			b[21] = a[19];
			b[22] = a[12];
			b[23] = a[1];
			b[24] = a[40];
			b[25] = a[51];
			b[26] = a[30];
			b[27] = a[36];
			b[28] = a[46];
			b[29] = a[54];
			b[30] = a[29];
			b[31] = a[39];
			b[32] = a[50];
			b[33] = a[44];
			b[34] = a[32];
			b[35] = a[47];
			b[36] = a[43];
			b[37] = a[48];
			b[38] = a[38];
			b[39] = a[55];
			b[40] = a[33];
			b[41] = a[52];
			b[42] = a[45];
			b[43] = a[41];
			b[44] = a[49];
			b[45] = a[35];
			b[46] = a[28];
			b[47] = a[31];
			switch (h) {
			case 0:
				for (m = 0; 48 > m; m++) d[0][m] = b[m];
				break;
			case 1:
				for (m = 0; 48 > m; m++) d[1][m] = b[m];
				break;
			case 2:
				for (m = 0; 48 > m; m++) d[2][m] = b[m];
				break;
			case 3:
				for (m = 0; 48 > m; m++) d[3][m] = b[m];
				break;
			case 4:
				for (m = 0; 48 > m; m++) d[4][m] = b[m];
				break;
			case 5:
				for (m = 0; 48 > m; m++) d[5][m] = b[m];
				break;
			case 6:
				for (m = 0; 48 > m; m++) d[6][m] = b[m];
				break;
			case 7:
				for (m = 0; 48 > m; m++) d[7][m] = b[m];
				break;
			case 8:
				for (m = 0; 48 > m; m++) d[8][m] = b[m];
				break;
			case 9:
				for (m = 0; 48 > m; m++) d[9][m] = b[m];
				break;
			case 10:
				for (m = 0; 48 > m; m++) d[10][m] = b[m];
				break;
			case 11:
				for (m = 0; 48 > m; m++) d[11][m] = b[m];
				break;
			case 12:
				for (m = 0; 48 > m; m++) d[12][m] = b[m];
				break;
			case 13:
				for (m = 0; 48 > m; m++) d[13][m] = b[m];
				break;
			case 14:
				for (m = 0; 48 > m; m++) d[14][m] = b[m];
				break;
			case 15:
				for (m = 0; 48 > m; m++) d[15][m] = b[m]
			}
		}
		return d
	}
	/**
	 * @method _paramsEncode
	 * @description 加密字符串
	 * @param {Object} b 字符串
	 * @param {Object} a
	 * @param {Object} d
	 * @param {Object} e
	 */
	window._paramsEncode = function(b, a, d, e) {
		var h = b.length,
			p = "",
			q, f, l, z, x, v;
		a = "_p$_";
		d = "$e%_";
		null != a && "" != a && (q = A(a), z = q.length);
		null != d && "" != d && (f = A(d), x = f.length);
		null != e && "" != e && (l = A(e), v = l.length);
		if (0 < h) if (4 > h) {
			var p = C(b),
				g;
			if (null != a && "" != a && null != d && "" != d && null != e && "" != e) {
				var c;
				g = p;
				for (c = 0; c < z; c++) g = t(g, q[c]);
				for (c = 0; c < x; c++) g = t(g, f[c]);
				for (c = 0; c < v; c++) g = t(g, l[c])
			} else if (null != a && "" != a && null != d && "" != d) {
				g = p;
				for (c = 0; c < z; c++) g = t(g, q[c]);
				for (c = 0; c < x; c++) g = t(g, f[c])
			} else if (null != a && "" != a) for (g = p, c = 0; c < z; c++) g = t(g, q[c]);
			p = E(g)
		} else {
			for (var w = parseInt(h / 4), r = h % 4, u = 0, u = 0; u < w; u++) {
				c = b.substring(4 * u + 0, 4 * u + 4);
				c = C(c);
				if (null != a && "" != a && null != d && "" != d && null != e && "" != e) {
					g = c;
					for (c = 0; c < z; c++) g = t(g, q[c]);
					for (c = 0; c < x; c++) g = t(g, f[c]);
					for (c = 0; c < v; c++) g = t(g, l[c])
				} else if (null != a && "" != a && null != d && "" != d) {
					g = c;
					for (c = 0; c < z; c++) g = t(g, q[c]);
					for (c = 0; c < x; c++) g = t(g, f[c])
				} else if (null != a && "" != a) for (g = c, c = 0; c < z; c++) g = t(g, q[c]);
				p += E(g)
			}
			if (0 < r) {
				b = b.substring(4 * w + 0, h);
				c = C(b);
				if (null != a && "" != a && null != d && "" != d && null != e && "" != e) {
					g = c;
					for (c = 0; c < z; c++) g = t(g, q[c]);
					for (c = 0; c < x; c++) g = t(g, f[c]);
					for (c = 0; c < v; c++) g = t(g, l[c])
				} else if (null != a && "" != a && null != d && "" != d) {
					g = c;
					for (c = 0; c < z; c++) g = t(g, q[c]);
					for (c = 0; c < x; c++) g = t(g, f[c])
				} else if (null != a && "" != a) for (g = c, c = 0; c < z; c++) g = t(g, q[c]);
				p += E(g)
			}
		}
		return p
	};
	/**
	 * @method _paramsDecode
	 * @description 字符串解密
	 * @param {Object} b
	 * @param {Object} a
	 * @param {Object} d
	 * @param {Object} e
	 */
	window._paramsDecode = function(b, a, d, e) {
		var h = b.length,
			p = "",
			q, f, l, t, x, v;
		a = "_p$_";
		d = "$e%_";
		null != a && "" != a && (q = A(a), t = q.length);
		null != d && "" != d && (f = A(d), x = f.length);
		null != e && "" != e && (l = A(e), v = l.length);
		for (var h = parseInt(h / 16), g = 0, g = 0; g < h; g++) {
			var c = b.substring(16 * g + 0, 16 * g + 16),
				w = "";
			for (i = 0; 16 > i; i++) {
				var r = void 0;
				switch (c.substring(i, i + 1)) {
				case "0":
					r = "0000";
					break;
				case "1":
					r = "0001";
					break;
				case "2":
					r = "0010";
					break;
				case "3":
					r = "0011";
					break;
				case "4":
					r = "0100";
					break;
				case "5":
					r = "0101";
					break;
				case "6":
					r = "0110";
					break;
				case "7":
					r = "0111";
					break;
				case "8":
					r = "1000";
					break;
				case "9":
					r = "1001";
					break;
				case "A":
					r = "1010";
					break;
				case "B":
					r = "1011";
					break;
				case "C":
					r = "1100";
					break;
				case "D":
					r = "1101";
					break;
				case "E":
					r = "1110";
					break;
				case "F":
					r = "1111"
				}
				w += r
			}
			c = w;
			w = Array(64);
			for (r = r = 0; 64 > r; r++) w[r] = parseInt(c.substring(r, r + 1));
			var u;
			if (null != a && "" != a && null != d && "" != d && null != e && "" != e) {
				u = w;
				for (c = v - 1; 0 <= c; c--) u = B(u, l[c]);
				for (c = x - 1; 0 <= c; c--) u = B(u, f[c]);
				for (c = t - 1; 0 <= c; c--) u = B(u, q[c])
			} else if (null != a && "" != a && null != d && "" != d) {
				u = w;
				for (c = x - 1; 0 <= c; c--) u = B(u, f[c]);
				for (c = t - 1; 0 <= c; c--) u = B(u, q[c])
			} else if (null != a && "" != a) for (u = w, c = t - 1; 0 <= c; c--) u = B(u, q[c]);
			c = u;
			w = "";
			for (i = 0; 4 > i; i++) {
				for (j = r = 0; 16 > j; j++) {
					var y = 1;
					for (m = 15; m > j; m--) y *= 2;
					r += c[16 * i + j] * y
				}
				0 != r && (w += String.fromCharCode(r))
			}
			p += w
		}
		return p
	}
})();