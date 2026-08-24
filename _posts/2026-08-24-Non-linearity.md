---
layout: post
title: Origins of Non-linearity
date: 2026-08-18 15:00:00
description: 
tags: formatting images
categories: sample-posts
thumbnail: assets/img/convex.png
images:
  spotlight: true
toc:
beginning: true
---

***



## 📜 **1. Introduction**

<p style="text-align: justify;" markdown="1">

Non-linear solid mechanics is a branch of **continuum mechanics** that deals with solids under conditions where **linear assumptions fail**. It is essential for modeling:

</p>

*   **Large deformations** (geometric non-linearity),
*   **Non-linear material behavior** (plasticity, hyperelasticity),
*   **Complex boundary conditions** (contact, friction).

***


<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-4">
        {% include figure.liquid loading="eager" path="assets/img/abaqus-rubber2.gif" title="example image" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-4">
        {% include figure.liquid loading="eager" path="assets/img/twisting-copper2.gif" title="example image" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="text-center">
    <div class="caption">
        <a href="https://www.goengineer.com/blog/understanding-abaqus-material-behavior">
          Hyperelastic Rubber Simulation using Non-linea solid mechanics theorem.
        </a>  
    </div>
</div>


***


## 🏗 **2. Origins of Non-linearity**

| 🔍 **Type**                   |  📖 **Origin & Cause**                                                                            |
| :---------------------------: | :------------------------------------------------------------------------------------------------: |
| **Geometric Non-linearity**   | Large displacements and rotations → strain measures must account for updated geometry.             |
| **Material Non-linearity**    | Stress-strain relation deviates from Hooke’s law → plasticity, viscoelasticity, hyperelasticity.   |
| **Boundary Non-linearity**    | Contact, friction, and changing constraints → non-linear boundary conditions.                      |

***


### ✅ **3.1 Geometric Non-linearity**


Geometric nonlinearity becomes important when a structure experiences:

- Large displacements
- Large rotations
- Large strains
- Significant changes in geometry
- Load directions that evolve with deformation

*   **Tools:** Green-Lagrange strain tensor, updated geometry.
*   **Examples:** Buckling of beams, shell deformation.


For finite deformation, the deformation gradient is

$$
\mathbf{F}
=
\frac{\partial\mathbf{x}}
{\partial\mathbf{X}},
$$

where $\mathbf{X}$ and $\mathbf{x}$ denote the reference and current positions, respectively.

The right Cauchy–Green deformation tensor is

$$
\mathbf{C}
=
\mathbf{F}^{\mathrm{T}}\mathbf{F},
$$

whereas the left Cauchy–Green deformation tensor is

$$
\mathbf{B}
=
\mathbf{F}\mathbf{F}^{\mathrm{T}}.
$$

The Green–Lagrange strain tensor is

$$
\mathbf{E}
=
\frac{1}{2}
\left(
\mathbf{C}
-
\mathbf{I}
\right).
$$


<p style="text-align: justify;" markdown="1">

These quantities are commonly used in nonlinear finite element formulations for rubber, soft biological tissues, elastomers, and liquid crystal elastomers.

</p>

---



### ✅ **3.2 Material Non-linearity**

Here is an expanded and technically refined version:

### ✅ **3.2 Material Nonlinearity**

<p style="text-align: justify;" markdown="1">

Material nonlinearity arises when the constitutive relationship between stress and strain is nonlinear or depends on the loading history, deformation rate, temperature, or evolution of the material’s internal structure. Therefore, material nonlinearity is not limited to a curved stress–strain response; it may also involve irreversible deformation, hysteresis, stiffness degradation, rate dependence, or changes in material properties during loading.

Unlike geometric nonlinearity, which results from large displacements, rotations, or strains, material nonlinearity is associated with the constitutive behavior of the material itself. Material and geometric nonlinearities may nevertheless occur simultaneously.

Common examples include:

</p>

- **Plasticity:** irreversible deformation after yielding
- **Hyperelasticity:** nonlinear but recoverable elastic deformation, typically at finite strains
- **Viscoelasticity:** time- and rate-dependent behavior with stress relaxation and creep
- **Creep:** progressive deformation under a sustained load
- **Damage:** gradual degradation of stiffness and load-carrying capacity
- **Fracture:** initiation and propagation of cracks or material separation
- **Mullins effect:** stress-softening caused by prior loading, commonly observed in rubbers
- **Pseudoelasticity:** recoverable hysteretic behavior associated with phase transformations
- **Elastoplasticity with hardening or softening:** evolution of the yield surface during deformation
- **Thermomechanical coupling:** dependence of the constitutive response on temperature and thermal history

<p style="text-align: justify;" markdown="1">

A general constitutive relation may be expressed as

</p>

$$
\boldsymbol{\sigma}(t)
=
\mathcal{F}
\left[
\boldsymbol{\varepsilon}(\tau),
\dot{\boldsymbol{\varepsilon}}(\tau),
\boldsymbol{\alpha}(\tau),
T(\tau);
\; 0 \leq \tau \leq t
\right],
$$

<p style="text-align: justify;" markdown="1">

where $\boldsymbol{\sigma}$ is the stress tensor, $\boldsymbol{\varepsilon}$ is a suitable strain measure, $\dot{\boldsymbol{\varepsilon}}$ is the strain rate, $\boldsymbol{\alpha}$ denotes a set of internal state variables, and $T$ is the temperature. The functional notation $\mathcal{F}$ indicates that the current stress may depend on the entire deformation and thermal history.

Internal variables may represent quantities such as plastic strain, accumulated plastic deformation, damage, viscoelastic strains, phase fractions, molecular-chain orientation, or hardening parameters. Their evolution is generally governed by additional equations of the form

</p>

$$
\dot{\boldsymbol{\alpha}}
=
\boldsymbol{g}
\left(
\boldsymbol{\varepsilon},
\dot{\boldsymbol{\varepsilon}},
\boldsymbol{\alpha},
T
\right).
$$

<p style="text-align: justify;" markdown="1">

For a history-independent nonlinear elastic material, the relation can be simplified to

</p>

$$
\boldsymbol{\sigma}
=
\boldsymbol{\sigma}
\left(
\boldsymbol{\varepsilon},T
\right).
$$

<p style="text-align: justify;" markdown="1">

For hyperelastic materials, the stress is derived from a strain-energy density function. At finite deformation, for example,

</p>

$$
\mathbf{P}
=
\frac{\partial \Psi(\mathbf{F},T)}
{\partial \mathbf{F}},
$$

<p style="text-align: justify;" markdown="1">

where $\Psi$ is the strain-energy density, $\mathbf{F}$ is the deformation gradient, and $\mathbf{P}$ is the first Piola–Kirchhoff stress tensor. Appropriate work-conjugate stress and strain measures must be used when finite deformations are considered.

A key consequence of material nonlinearity is that the material tangent stiffness is not constant. In an incremental formulation,

</p>

$$
\mathrm{d}\boldsymbol{\sigma}
=
\mathbb{C}_{\mathrm{tan}}
:
\mathrm{d}\boldsymbol{\varepsilon},
\qquad
\mathbb{C}_{\mathrm{tan}}
=
\frac{\partial\boldsymbol{\sigma}}
{\partial\boldsymbol{\varepsilon}},
$$

<p style="text-align: justify;" markdown="1">

where $\mathbb{C}_{\mathrm{tan}}$ is the material tangent modulus. Because this modulus generally changes with the current deformation and material state, the governing equilibrium equations must usually be solved iteratively, for example using the Newton–Raphson method.

Material nonlinearities can also be classified as:

</p>

1. **History-independent**, such as nonlinear elasticity and ideal hyperelasticity;
2. **History-dependent**, such as plasticity, damage, and the Mullins effect;
3. **Rate-independent**, where the response depends on the loading path but not its rate;
4. **Rate-dependent**, such as viscoelasticity and viscoplasticity;
5. **Reversible**, such as ideal nonlinear elasticity;
6. **Irreversible or dissipative**, such as plasticity, damage, and fracture.

<p style="text-align: justify;" markdown="1">

Consequently, defining a material model requires more than fitting a single stress–strain curve. The selected constitutive law should account for the relevant loading paths, deformation range, strain rate, temperature, compressibility, anisotropy, loading–unloading behavior, and possible evolution of the material’s microstructure.

</p>

### ✅ **3.3 Boundary Non-linearity**


*   **Examples:** Bearings, crash analysis.


Contact analysis determines whether two surfaces:

- Remain separated
- Establish contact
- Slide relative to one another
- Stick due to friction
- Separate after contact

Contact introduces inequalities into the governing problem. For frictionless normal contact, the conditions may be expressed as

$$
g_n \geq 0,
$$

$$
t_n \leq 0,
$$

and

$$
g_n t_n = 0.
$$

<p style="text-align: justify;" markdown="1">

where $g_n$ is the normal gap and $t_n$ is the normal contact traction under a sign convention in which compression is negative.

</p>

Contact is encountered in:

- Bolted joints
- Tire–road interaction
- Metal forming
- Biological joints
- Sealing systems
- Indentation tests
- Self-contacting soft structures

---


***

### ✅ **3.4 Instability & Bifurcation**

*   **Phenomenon:** Multiple equilibrium states → sudden configuration changes.
*   **Examples:** Snap-through buckling, shear bands.

***

### ✅ **3.5 Computational Non-linear Mechanics**

*   **Challenge:** Non-linear PDEs require iterative solvers.
*   **Methods:** Newton-Raphson, incremental-iterative schemes.
*   **Tool:** Finite Element Analysis (FEA).

***

## 📊 **4. Flowchart for Solving a Non-linear Solid Mechanics Problem**

    Start
      ↓
    Define Geometry & Material Properties
      ↓
    Identify Non-linear Sources
       - Geometric?
       - Material?
       - Boundary?
      ↓
    Formulate Governing Equations
       - Balance laws
       - Constitutive relations
      ↓
    Discretize (Finite Element Method)
      ↓
    Apply Boundary Conditions & Loads
      ↓
    Solve Iteratively
       - Newton-Raphson
       - Convergence check
      ↓
    Post-process Results
       - Stress, strain, deformation
    End

***

## 🌐 **5. Applications**

*   Biomechanics 🧬
*   Structural Engineering 🏗
*   Energy Systems ⚡


***


</p>

## Further Reading

<div class="row">
  <div class="col-sm-4 mt-3 mt-md-0">
    <a href="https://mohsafaei.github.io/books/Continuum_Mechanics/">
        {% include figure.liquid path="assets/img/book_covers/ConM.jpg" title="example image" class="img-fluid rounded-lg z-depth-3" %}
    </a>
  </div>

  <div class="col-sm-4 mt-3 mt-md-0">
    <a href="https://mohsafaei.github.io/books/FEM/">
        {% include figure.liquid path="assets/img/book_covers/FEM.jpg" title="example image" class="img-fluid rounded-lg z-depth-3" %}
    </a>
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    <a href="https://mohsafaei.github.io/books/Nonlinear_Solid_Mechanics/">
        {% include figure.liquid path="assets/img/book_covers/NLSM.jpg" title="example image" class="img-fluid rounded-lg z-depth-3" %}
    </a>
  </div>
</div>