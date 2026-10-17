---
layout: course
title: Algebraic Topology I (Bonn, Winter 2026/27)
permalink: /algtop1/
---

A companion page for the first half of **Algebraic Topology I (V4D1)** at the Universität Bonn, winter semester 2026/27, which I teach together with [Markus Hausmann](https://www.math.uni-bonn.de/people/hausmann/). Official course information (exercise sheets, exam admission, announcements) is on eCampus and on Markus's course page. This page collects extra material: worked examples, extra exercises, board photos and corrections.

* **Lectures:** Mon 14:15–16:00 (Kleiner Hörsaal) and Wed 08:15–10:00 (Zeichensaal). I lecture until the end of November; Markus takes over in December.
* **Exams:** 2 February 2027 (09:00–11:00) and 8 March 2027.
* **AI policy:** use AI tools to *learn*, not to produce solutions; if a tool contributed to something you hand in, say how in one line. There is no penalty for honest disclosure.

## Course map

$$
\text{fiber sequences} \;\Longrightarrow\; \text{Serre spectral sequence} \;\Longrightarrow\;
\begin{cases}
\text{computations: } U(n),\ \Omega S^n,\ \mathbb{C}P^n,\ K(A,n) \\
\text{structure: Hurewicz, Serre classes, } \pi_*(S^n)\otimes\mathbb{Q}
\end{cases}
\;\Longrightarrow\; \text{Steenrod squares}
$$

followed (Markus) by vector bundles, characteristic classes and bordism.

## Board photos

Posted after each lecture.

<!-- * Lecture 1 (12 Oct): [photos](...) -->

## Corrections to the notes

Found an error in the lecture notes? Tell me after class or by email. Corrections will be listed here, with thanks.

---

## Worked examples

These are short computations that complement the lectures. Try each one before opening the solution.

### 1. Why the base has to be simply connected: the Klein bottle
*(Lectures 1–2.)* The Klein bottle $$K$$ fibers over $$S^1$$ with fiber $$S^1$$, and going once around the base reflects the fiber. Compute $$H_*(K;\mathbb{Z})$$ with the Serre spectral sequence, and see what goes wrong if you ignore the monodromy.

<details markdown="1">
<summary>Solution</summary>

Going around the base acts on $$H_1(\text{fiber})\cong\mathbb{Z}$$ by $$-1$$ (and trivially on $$H_0$$), so the coefficients $$H_1(F)$$ form the local system $$\mathbb{Z}_-$$. For a local system $$M$$ on $$S^1$$ with monodromy $$t$$,

$$H_0(S^1;M) = M/(t-1)M \ \text{(coinvariants)}, \qquad H_1(S^1;M) = \ker(t-1) \ \text{(invariants)}.$$

For $$M=\mathbb{Z}_-$$ these are $$\mathbb{Z}/2$$ and $$0$$. So the $$E^2$$-page has $$\mathbb{Z}$$ at $$(0,0)$$ and $$(1,0)$$, $$\mathbb{Z}/2$$ at $$(0,1)$$ and $$0$$ at $$(1,1)$$. All differentials vanish for degree reasons (the base has dimension 1). Hence $$H_2(K)=0$$, and $$H_1(K)$$ is an extension

$$0 \to \mathbb{Z}/2 \to H_1(K) \to \mathbb{Z} \to 0,$$

which splits because $$\mathbb{Z}$$ is free: $$H_1(K)\cong\mathbb{Z}\oplus\mathbb{Z}/2$$. Ignoring the monodromy would give $$H_1=\mathbb{Z}^2$$ and $$H_2=\mathbb{Z}$$, the homology of the torus.
</details>

### 2. Same $$E^2$$-page, different answers: circle bundles over $$S^2$$
*(Lecture 2.)* For each integer $$m$$ there is a circle bundle $$S^1\to E_m\to S^2$$ with Euler number $$m$$: $$E_0=S^2\times S^1$$, $$E_{\pm1}=S^3$$ (Hopf), $$E_{\pm2}=SO(3)\cong\mathbb{R}P^3$$ (unit tangent bundle of $$S^2$$), and in general the lens space $$L(m,1)$$. All of them have the same $$E^2$$-page. What do the spectral sequences look like?

<details markdown="1">
<summary>Solution</summary>

$$E^2_{p,q}=H_p(S^2;H_q(S^1))$$ is $$\mathbb{Z}$$ for $$p\in\{0,2\}$$, $$q\in\{0,1\}$$. The only possible differential is $$d^2\colon E^2_{2,0}\to E^2_{0,1}$$, a map $$\mathbb{Z}\to\mathbb{Z}$$, and for $$E_m$$ it is multiplication by $$\pm m$$. Hence

* $$m=0$$: $$H_*=\mathbb{Z},\mathbb{Z},\mathbb{Z},\mathbb{Z}$$ in degrees $$0,1,2,3$$;
* $$m\neq0$$: $$H_1=\mathbb{Z}/m$$, $$H_2=0$$, $$H_3=\mathbb{Z}$$.

The moral: **the $$E^2$$-page does not determine the differentials.** You need extra input, such as knowing the homology of the total space (as in lecture for the Hopf fibration), multiplicative structure, or naturality.
</details>

### 3. The cohomology ring of $$\Omega S^n$$
*(Lectures 3–4.)* In lecture we showed $$H^*(\Omega S^3;\mathbb{Z})\cong\Gamma[x]$$, a divided power algebra on a class of degree 2. Compute $$H^*(\Omega S^n;\mathbb{Z})$$ as a ring for every $$n\ge2$$.

<details markdown="1">
<summary>Solution</summary>

Use the path-loop fibration $$\Omega S^n\to *\to S^n$$. Since the total space is contractible, everything except $$E_\infty^{0,0}$$ must die, and the only possible differential is $$d_n\colon E_n^{0,q}\to E_n^{n,q-n+1}$$. So $$H^q(\Omega S^n)\cong H^{q-n+1}(\Omega S^n)$$ for $$q\ge n-1$$ and $$H^q=0$$ for $$0<q<n-1$$. Additively, $$H^*(\Omega S^n)$$ is therefore $$\mathbb{Z}$$ in each degree $$k(n-1)$$, $$k\geq 0$$.

Let $$e\in H^n(S^n)$$ be a generator.

* **$$n$$ odd** (so $$n-1$$ is even). Let $$x\in H^{n-1}$$ with $$d_n(x)=e$$. The Leibniz rule gives $$d_n(x^k)=k\,x^{k-1}e$$. Since $$d_n\colon E^{0,k(n-1)}\to E^{n,(k-1)(n-1)}$$ is an isomorphism, induction shows $$x^k=k!\cdot(\text{generator})$$. Hence $$H^*(\Omega S^n)\cong\Gamma[x]$$, exactly as for $$n=3$$.
* **$$n$$ even** (so $$n-1$$ is odd). Let $$x\in H^{n-1}$$ with $$d_n(x)=e$$, and $$y\in H^{2n-2}$$ with $$d_n(y)=xe$$. Graded commutativity gives $$x^2=-x^2$$, so $$x^2=0$$ because $$H^{2n-2}$$ is torsion-free. The Leibniz rule gives $$d_n(y^k)=k\,y^{k-1}xe$$, so as before $$y^k=k!\cdot(\text{generator})$$. Also $$d_n(x\,\gamma_k(y))=e\,\gamma_k(y)$$ (up to sign) because $$x^2=0$$, so the products $$x\,\gamma_k(y)$$ generate the odd degrees. Hence

$$H^*(\Omega S^n;\mathbb{Z})\cong\Lambda[x]\otimes\Gamma[y],\qquad |x|=n-1,\ |y|=2n-2.$$

Compare: $$\Omega S^n$$ has a CW structure with one cell in each dimension $$k(n-1)$$ (James), and the divided powers say that the attaching maps are "as non-trivial as possible" in cohomology.
</details>

### 4. The Gysin sequence from the Serre spectral sequence
*(Lectures 3–4.)* Let $$S^k\to E\xrightarrow{\pi}B$$ be a fibration ($$k\ge1$$) with $$B$$ simply connected. Derive a long exact sequence relating $$H^*(E)$$ and $$H^*(B)$$, and use it to recompute $$H^*(\mathbb{C}P^n)$$ as a ring.

<details markdown="1">
<summary>Solution</summary>

$$E_2^{p,q}=H^p(B)\otimes H^q(S^k)$$ (the coefficients $$H^q(S^k)$$ are free) has two non-zero rows, $$q=0$$ and $$q=k$$. Write $$E_2^{p,k}=H^p(B)\cdot\sigma$$ with $$\sigma\in H^k(S^k)$$ a generator. The only possible differential is $$d_{k+1}$$, and by the Leibniz rule (classes from the base are permanent cycles)

$$d_{k+1}(a\sigma)=\pm\, a\cdot e,\qquad e:=d_{k+1}(\sigma)\in H^{k+1}(B).$$

The class $$e$$ is the **Euler class**. Then $$E_\infty=E_{k+2}$$, and the two-step filtration of $$H^n(E)$$ gives

$$0\to H^n(B)/e\cdot H^{n-k-1}(B)\xrightarrow{\pi^*} H^n(E)\to \ker\big(\cdot e\colon H^{n-k}(B)\to H^{n+1}(B)\big)\to 0.$$

Splicing these together gives the **Gysin sequence**

$$\cdots\to H^{n-k-1}(B)\xrightarrow{\ \cdot e\ }H^n(B)\xrightarrow{\pi^*}H^n(E)\to H^{n-k}(B)\xrightarrow{\ \cdot e\ }H^{n+1}(B)\to\cdots$$

For $$S^1\to S^{2n+1}\to\mathbb{C}P^n$$: since $$H^i(S^{2n+1})=0$$ for $$0<i<2n+1$$, the map $$\cdot e\colon H^{i-2}(\mathbb{C}P^n)\to H^i(\mathbb{C}P^n)$$ is an isomorphism for $$1\le i\le 2n$$ (exactness on both sides). Starting from $$H^0=\mathbb{Z}$$, this gives $$H^*(\mathbb{C}P^n)=\mathbb{Z}[e]/(e^{n+1})$$.
</details>

### 5. Rational homotopy of $$\mathbb{C}P^n$$
*(Lecture 10.)* Compute $$\pi_*(\mathbb{C}P^n)\otimes\mathbb{Q}$$.

<details markdown="1">
<summary>Solution</summary>

The long exact sequence of $$S^1\to S^{2n+1}\to\mathbb{C}P^n$$ gives $$\pi_2(\mathbb{C}P^n)\cong\mathbb{Z}$$ and $$\pi_k(\mathbb{C}P^n)\cong\pi_k(S^{2n+1})$$ for $$k\ge3$$. By Serre's theorem, $$\pi_k(S^{2n+1})\otimes\mathbb{Q}$$ is $$\mathbb{Q}$$ for $$k=2n+1$$ and $$0$$ otherwise. So $$\pi_*(\mathbb{C}P^n)\otimes\mathbb{Q}$$ is $$\mathbb{Q}$$ in degrees $$2$$ and $$2n+1$$, and $$0$$ otherwise.

Compare $$H^*(\mathbb{C}P^n;\mathbb{Q})=\mathbb{Q}[x]/(x^{n+1})$$: one generator in degree 2 (the rational $$\pi_2$$) and one relation $$x^{n+1}=0$$ in degree $$2n+2$$, which is "killed" by the rational $$\pi_{2n+1}$$. This is the first glimpse of Sullivan's rational homotopy theory.
</details>

### 6. What cup products can't see: $$\Sigma\mathbb{C}P^2\not\simeq S^3\vee S^5$$
*(Lecture 12.)* Show that $$\Sigma\mathbb{C}P^2$$ and $$S^3\vee S^5$$ have isomorphic cohomology rings, but are not homotopy equivalent. Conclude that $$\Sigma\eta\neq0$$ in $$\pi_4(S^3)$$.

<details markdown="1">
<summary>Solution</summary>

Both have $$\tilde H^*$$ equal to $$\mathbb{Z}$$ in degrees 3 and 5, and all cup products of positive-degree classes vanish on a suspension. But $$\mathrm{Sq}^2$$ is stable: in $$\mathbb{C}P^2$$, $$\mathrm{Sq}^2x=x^2\neq0$$ (mod 2), so $$\mathrm{Sq}^2\colon H^3(\Sigma\mathbb{C}P^2;\mathbb{F}_2)\to H^5(\Sigma\mathbb{C}P^2;\mathbb{F}_2)$$ is non-zero. On $$S^3\vee S^5$$ the degree-3 class is pulled back from $$S^3$$ along the retraction $$S^3\vee S^5\to S^3$$, and $$\mathrm{Sq}^2$$ of it is pulled back from $$H^5(S^3)=0$$. So $$\mathrm{Sq}^2=0$$ there. Since $$\Sigma\mathbb{C}P^2$$ is the cofiber of $$\Sigma\eta\colon S^4\to S^3$$, a null-homotopy of $$\Sigma\eta$$ would give $$\Sigma\mathbb{C}P^2\simeq S^3\vee S^5$$. Hence $$\Sigma\eta\neq0$$, and in fact all suspensions of $$\eta$$ are non-zero.
</details>

---

## Extra exercises

These are optional and not part of the official sheets. Hints are folded. Difficulty: (★) routine, (★★) needs an idea, (★★★) challenging.

1. **(★, L1–2) Euler characteristics.** Let $$F\to Y\to X$$ be a fiber sequence with $$X$$ simply connected and all spaces of finite type with finitely many non-zero homology groups. Show $$\chi(Y)=\chi(F)\chi(X)$$. Deduce that $$S^4$$ is not the total space of a fiber sequence $$S^1\to S^4\to X$$ with $$X$$ such a space.
   <details markdown="1"><summary>Hint</summary>The Euler characteristic of a finite page is unchanged by taking homology, and $$\chi(E^2)=\chi(X)\chi(F)$$ by universal coefficients. $$\chi(S^4)=2$$ but $$\chi(S^1)=0$$.</details>

2. **(★, L2) Symplectic groups.** Using $$Sp(n-1)\to Sp(n)\to S^{4n-1}$$, show that $$H^*(Sp(n);\mathbb{Z})\cong\Lambda(x_3,x_7,\dots,x_{4n-1})$$.
   <details markdown="1"><summary>Hint</summary>Copy the proof for $$U(n)$$; all differentials vanish on generators for degree reasons.</details>

3. **(★, L3) $$\Omega S^2$$.** Use the path-loop fibration to show $$H_k(\Omega S^2;\mathbb{Z})\cong\mathbb{Z}$$ for every $$k\ge0$$. Is this consistent with $$\Omega S^2\simeq S^1\times\Omega S^3$$?
   <details markdown="1"><summary>Hint</summary>$$d^2\colon E^2_{2,q}\to E^2_{0,q+1}$$ must be an isomorphism for all $$q$$. Yes: Künneth.</details>

4. **(★★, L3–4) The Wang sequence.** For a fibration $$F\to E\to S^n$$ ($$n\ge2$$), derive a long exact sequence $$\cdots\to H_k(F)\to H_k(E)\to H_{k-n}(F)\to H_{k-1}(F)\to\cdots$$.
   <details markdown="1"><summary>Hint</summary>The $$E^2$$-page has two columns, $$p=0$$ and $$p=n$$, and only $$d^n$$ can be non-zero. Split each total degree into a two-step filtration, as in the Gysin sequence (Worked example 4).</details>

5. **(★★, L5–6) The Bockstein spectral sequence.** Let $$C$$ be a chain complex of free abelian groups of finite type. The short exact sequence $$0\to C\xrightarrow{p}C\to C/p\to0$$ gives an exact couple with $$A=H_*(C)$$ and $$E=H_*(C/p)$$. Identify $$d^1$$, and show that $$E^\infty\cong(H_*(C)/\text{torsion})\otimes\mathbb{F}_p$$.
   <details markdown="1"><summary>Hint</summary>$$d^1$$ is the Bockstein $$\beta$$. Reduce to the case where $$H_*(C)$$ is a single cyclic group: a $$\mathbb{Z}$$-summand of $$H_n(C)$$ contributes one permanent class in degree $$n$$, while a $$\mathbb{Z}/p^r$$-summand contributes classes in degrees $$n$$ and $$n+1$$ that cancel via $$d^r$$. Do the example $$C=(\mathbb{Z}\xrightarrow{p^2}\mathbb{Z})$$ first.</details>

6. **(★, L8–9) Finiteness.** Use the mod-$$\mathcal{C}$$ Hurewicz theorem to show that $$\pi_k(S^3)$$ is finite for all $$k>3$$.
   <details markdown="1"><summary>Hint</summary>Apply it to the 3-connected cover $$X$$ of $$S^3$$, whose homology was computed in lecture: finite in positive degrees.</details>

7. **(★★★, L9) The first $$p$$-torsion in $$\pi_*(S^{2m+1})$$.** Show that the first $$p$$-torsion in $$\pi_*(S^{2m+1})$$ occurs in degree $$2m+2p-2$$ and is $$\mathbb{Z}/p$$. Check that this recovers $$\pi_{2p}(S^3)$$ for $$m=1$$.
   <details markdown="1"><summary>Hint</summary>Kill the bottom class with $$S^{2m+1}\to K(\mathbb{Z},2m+1)$$ and compute the homology of the fiber in low degrees modulo the Serre class of finite groups of order prime to $$p$$. You need $$H^*(K(\mathbb{Z},2m+1);\mathbb{Z}_{(p)})$$ in low degrees: the first $$p$$-torsion sits in degree $$2m+1+2p-1$$. Proving that last fact is the real exercise.</details>

8. **(★, L12) Squares on projective spaces.** Show that in $$H^*(\mathbb{R}P^\infty;\mathbb{F}_2)=\mathbb{F}_2[x]$$ one has $$\mathrm{Sq}^i(x^k)=\binom{k}{i}x^{k+i}$$, and in $$H^*(\mathbb{C}P^\infty;\mathbb{F}_2)=\mathbb{F}_2[y]$$ one has $$\mathrm{Sq}^2(y^k)=k\,y^{k+1}$$.
   <details markdown="1"><summary>Hint</summary>The total square $$\mathrm{Sq}=\sum_i\mathrm{Sq}^i$$ is a ring map with $$\mathrm{Sq}(x)=x+x^2$$ and $$\mathrm{Sq}(y)=y+y^2$$.</details>

9. **(★★, L12) Projective planes don't split after suspension.** Show that $$\Sigma^k\mathbb{C}P^2\not\simeq S^{k+2}\vee S^{k+4}$$ and $$\Sigma^k\mathbb{H}P^2\not\simeq S^{k+4}\vee S^{k+8}$$ for all $$k\ge0$$, although the cohomology rings agree for $$k\geq 1$$.
   <details markdown="1"><summary>Hint</summary>Use $$\mathrm{Sq}^2$$ and $$\mathrm{Sq}^4$$ respectively, and stability. (Consequently $$\Sigma^k\eta\neq0$$ and $$\Sigma^k\nu\neq0$$ for the Hopf maps $$\eta\colon S^3\to S^2$$ and $$\nu\colon S^7\to S^4$$.)</details>

10. **(★★, L13–14) Using Cartan–Serre.** List the polynomial generators of $$H^*(K(\mathbb{Z}/2,3);\mathbb{F}_2)$$ in degrees $$\le 10$$.
    <details markdown="1"><summary>Answer</summary>$$\iota_3$$ (deg 3), $$\mathrm{Sq}^1\iota_3$$ (4), $$\mathrm{Sq}^2\iota_3$$ (5), $$\mathrm{Sq}^2\mathrm{Sq}^1\iota_3$$ (6), $$\mathrm{Sq}^3\mathrm{Sq}^1\iota_3$$ (7), $$\mathrm{Sq}^4\mathrm{Sq}^2\iota_3$$ (9), $$\mathrm{Sq}^4\mathrm{Sq}^2\mathrm{Sq}^1\iota_3$$ (10): these are the admissible $$I$$ with excess $$<3$$. Note that $$\mathrm{Sq}^3\iota_3=\iota_3^2$$ is not a new generator (excess 3).</details>
